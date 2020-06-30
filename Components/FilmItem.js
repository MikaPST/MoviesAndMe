// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const film = this.props.film
    
    return (
      <View style={styles.main_container}>
          <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
          />
        <View style={styles.content_container}>
            <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
            </View>
            
            <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            </View>

            <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
            </View>
        </View>      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10
  },
  image: {
    height: 180,
    width: 120,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 10
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5    
  },
  vote_text: {
    color: '#ffd500',
    fontSize: 26,
    fontWeight: 'bold',
  },
  description_container: {
      flex: 7
  },
  description_text: {
    fontSize: 13,
    color: '#4c4c4c',
    fontStyle: 'italic'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    fontSize: 11,
    textAlign: 'right',
    color: '#4c4c4c',
  }
})

export default FilmItem