import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'

export default function DetailBody({categories, description, genesis, hash, marketcap, high, low, imgURL}) {
  return (
      <ScrollView style={styles.container}>
        <View style={styles.flexed}>
          <View style={styles.info}>
            {
              genesis !== null && genesis !== undefined ?
                <>
                  <Text style={styles.subheader}>Genesis Date:</Text>
                  <Text style={styles.text}>{`${genesis}`}</Text>
                </>
              :
                null
            }
            {
              high !== null ?
                <>
                  <Text style={styles.subheader}>24h Hi / Lo:</Text>
                  <Text style={styles.text}>{`${high}`} / {`${low}`} </Text>
                </>
              :
                null
            }
            {
              marketcap !== null ?
                <>
                  <Text style={styles.subheader}>Market Cap:</Text>
                  <Text style={styles.text}>{`${marketcap}`}</Text>
                </>
              :
                null
            }
            {
              hash !== null ?
                <>
                  <Text style={styles.subheader}>Hashing Algorithm:</Text>
                  <Text style={styles.text}>{`${hash}`}</Text>
                </>
              :
                null
            }
          </View>
          <View style={styles.logo}>
            {
              imgURL !== null ? 
                <Image style={styles.image} source={{ uri: imgURL }} />
              :
                null
            }
          </View>
        </View>
        <View>
          {
            categories !== null && categories?.length < 0 ?
              <>
                <Text style={styles.subheader}>Categories:</Text>
                <View style={styles.categoryContainer}>
                  { categories?.map((c, index) =>
                    (
                      <Text style={styles.category} key={index}>{`${c}`}</Text>
                    )
                  )}
                </View>
              </>
            :
              null
          }
          {
            description ?
              <>
                <Text style={styles.header}>Currency Profile</Text>
                <Text style={styles.text}>{`${description}`}</Text>
              </>
            :
              null
          }
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10
  },
  header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 7,
    marginBottom: 7
  },
  subheader: {
    color: '#fff',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  categoryContainer: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  category: {
    backgroundColor: '#424040',
    color: '#fff',
    fontSize: 14,
    marginRight: 6,
    marginBottom: 6,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 3
  },
  text: {
    color: '#fff'
  },
  image: {
    width: '100%',
    height: 100
  },
  flexed: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  info: {
    width: '60%'
  },
  logo: {
    width: 110,
    height: 110,
    marginTop: 10,
    backgroundColor: '#202020',
    borderColor: '#111',
    borderWidth: 1,
    padding: 5
  }
})
