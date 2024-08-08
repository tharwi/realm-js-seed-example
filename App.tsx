import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Realm from 'realm';
import UserSchema from './schemas/user';
import PostSchema from './schemas/post';
import {user} from './seeding/data';

const seedData = async (realm: Realm, userData: any) => {
  const startTime = Date.now();
  try {
    realm.write(() => {
      realm.create('User', userData);
    });
  } catch (error) {
    console.error('Data seeding failed:', error);
  } finally {
    const endTime = Date.now();
    console.log(`Data seeding completed in ${endTime - startTime} ms.`);
  }
};

const App = () => {
  useEffect(() => {
    (async () => {
      const realm = await Realm.open({
        schema: [UserSchema, PostSchema],
      });

      await seedData(realm, user);
      realm.close();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Realm Data Seeding Example</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
