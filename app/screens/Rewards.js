import React from 'react';
import {View, FlatList, ImageBackground, StyleSheet, Text} from 'react-native';

import {HeaderBar, CustomButton} from '../components';
import {dummyData, COLORS, FONTS, SIZES, icons} from '../constants';

import {connect} from 'react-redux';

function Rewards({navigation, appTheme}) {
  function renderRewardPointSection() {
    return (
      <View style={{alignItems: 'center', marginVertical: SIZES.padding}}>
        <Text style={{color: COLORS.primary, ...FONTS.h1, fontSize: 35}}>
          Rewards
        </Text>
        <Text
          style={{
            color: appTheme.textColor,
            width: SIZES.width * 0.6,
            textAlign: 'center',
            ...FONTS.h3,
            lineHeight: 18,
            marginTop: 10,
          }}>
          You are 60 points away from your next rewards
        </Text>

        <ImageBackground
          source={icons.reward_cup}
          resizeMode="contain"
          style={{
            marginTop: SIZES.padding,
            width: SIZES.width * 0.8,
            height: SIZES.width * 0.8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.white,
            }}>
            <Text style={{...FONTS.h1}}>280</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }

  function renderAvailableRewardsHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginBottom: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}>
        <Text style={{color: appTheme.textColor, ...FONTS.h2}}>
          Available Rewards
        </Text>
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <CustomButton
          isPrimaryButton={true}
          label="Scan in store"
          containerStyle={{
            width: 130,
            paddingVertical: 5,
            marginRight: SIZES.radius,
            borderRadius: SIZES.radius * 2,
          }}
          labelStyle={{...FONTS.h3}}
          onPress={() => navigation.navigate('Location')}
        />
        <CustomButton
          isSecondaryButton={true}
          label="Redeem"
          containerStyle={{
            width: 130,
            paddingVertical: 5,
            borderRadius: SIZES.radius * 2,
          }}
          labelStyle={{...FONTS.h3}}
          onPress={() => navigation.navigate('Location')}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderBar />
      <FlatList
        style={{
          marginTop: -25,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
          backgroundColor: appTheme.backgroundColor,
        }}
        data={dummyData.availableRewards}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* reward point */}
            {renderRewardPointSection()}

            {/* buttons */}
            {renderButtons()}

            {/* header label */}
            {renderAvailableRewardsHeader()}
          </View>
        }
        ListFooterComponent={<View style={{marginBottom: 130}} />}
        renderItem={({item}) => {
          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.base,
                paddingVertical: SIZES.base,
                borderRadius: 20,
                backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
              }}>
              <Text
                style={{
                  color: item.eligible ? COLORS.black : COLORS.lightGray,
                  ...FONTS.body3,
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});

function mapStateToProps(state) {
  return {
    appTheme: state.appTheme,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);
