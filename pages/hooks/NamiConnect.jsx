import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, Box, useToast } from '@chakra-ui/react';
import MiddleEllipsis from 'react-middle-ellipsis';
import Loader from '../../cardano/loader';
import { ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';

const addressToBech32 = async () => {
    await Loader.load();
    const address = (await window.cardano.getUsedAddresses())[0];
    return Loader.Cardano.Address.from_bytes(
        Buffer.from(address, 'hex')
    ).to_bech32();
};
const ConnectWallet = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [flag, setFlag] = useState(false);
    const connected = useStoreState((state) => state.connection.connected);
    const setConnected = useStoreActions(
        (actions) => actions.connection.setConnected
    );

    const toast = useToast();

    useEffect(() => {
        if (connected && !flag) {
            window.cardano.onAccountChange(async () => {
                const address = await addressToBech32();
                setConnected(address);
                setFlag(true);
            });
        }
    }, [connected]);

    const checkConnection = async () => {
        if (window.cardano && (await window.cardano.isEnabled())) {
            const session = localStorage.getItem('session');
            if (Date.now() - parseInt(session) < 6000000) {
                // 1h
                const address = await addressToBech32();
                setConnected(address);
            }
        }
    };

    useEffect(() => {
        checkConnection();
    }, []);

    return connected
        ? (
            <div
                onClick={() => router.push(`/`)}
            >
                <Ellipsis connected={connected} />
            </div>
        )
        : (
            <Button
                isDisabled={isLoading}
                isLoading={isLoading}
                onClick={async () => {
                    setIsLoading(false);
                    if (!(await checkStatus(toast, connected))) {
                        setIsLoading(false);
                        return;
                    }
                    if (await window.cardano.enable()) {
                        const address = await addressToBech32();
                        setConnected(address);
                        localStorage.setItem('session', Date.now().toString());
                    }

                    setIsLoading(false);
                }}
            >
                <button className="button-nami_wallet">Nami Wallet</button>
            </Button>
        );
};

const Ellipsis = ({ connected }) => {
    const [change, setChange] = useState(false);

    useEffect(() => {
        setChange(true);
        setTimeout(() => setChange(false));
    }, [connected]);

    return (
        !change && (
            <div
                style={{
                    width: '130px',
                    whiteSpace: 'nowrap',
                    fontWeight: 'bold',
                    fontSize: 14
                }}
            >
                <MiddleEllipsis>
                    <span>Connected</span>
                </MiddleEllipsis>
            </div>

            
        )
    );
};

export default ConnectWallet;

const checkStatus = async (toast, connected) => {
    return (
        NoNami(toast) &&
    (await window.cardano.enable()) &&
    (await WrongNetworkToast(toast))
    );
};

const NoNami = (toast) => {
    if (window.cardano) {
        return true;
    }
    toast({
        position: 'bottom-right',
        // eslint-disable-next-line react/display-name
        render: () => (
            <Box
                background="purple.400"
                color="white"
                px={6}
                py={3}
                rounded="3xl"
                display="flex"
                alignItems="space-around"
            >
                <InfoIcon />
                <Box ml="3" fontWeight="medium">
                    Nami not installed
                </Box>
                <Button
                    rounded="3xl"
                    colorScheme="whiteAlpha"
                    onClick={() => window.open('https://namiwallet.io')}
                    ml="4"
                    size="xs"
                    rightIcon={<ChevronRightIcon />}
                >
                    Get it
                </Button>
            </Box>
        ),
        duration: 9000
    });
    return false;
};

const WrongNetworkToast = async (toast) => {
    if ((await window.cardano.getNetworkId()) === 1) {
        return true;
    }
    toast({
        position: 'bottom-right',
        duration: 5000,
        // eslint-disable-next-line react/display-name
        render: () => (
            <Box
                background="purple.100"
                color="white"
                px={6}
                py={3}
                rounded="3xl"
                display="flex"
                alignItems="space-around"
            >
                <InfoIcon />
                <Box ml="3" fontWeight="medium">
                    Wrong network
                </Box>
            </Box>
        )
    });
    return false;
};
