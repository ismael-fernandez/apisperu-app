import React from 'react';
import admob from '@react-native-firebase/admob';
import { firebase } from '@react-native-firebase/admob';

import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

export function Banner() {
    return (
        <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
                requestNonPersonalizedAdsOnly: true,
            }}
            onAdLoaded={() => {
                console.log('Advert loaded');
            }}
            onAdFailedToLoad={(error) => {
                console.error('Advert failed to load: ', error);
            }}
        />
    )
}

