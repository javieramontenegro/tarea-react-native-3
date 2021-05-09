import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import ChipGenre from '../ChipGenre';
import Rating from '../Rating';
import ActorsList from './ActorsList';
import MovieCardImage from './MovieCardImage';
import MovieDetails from './MovieDetails';
import MovieFullscreenImage from './MovieFullscreenImage';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: '#ecf0f1',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: 'center',
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 15,
    padding: 10,
  },
  textColor: {
    color: '#34495e',
  },
  bigFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  likeRating: {
    position: 'absolute',
    left: 20,
    top: 20,
    borderRadius: 30,
    zIndex: 9,
    padding: 0,
    elevation: 10,
    backgroundColor: 'white',
  },
  containerDetails: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  containerChip: {
    flex: 1,
    flexDirection: 'row',
  },
});

const MovieCard = ({
  posterurl,
  title,
  year,
  imdbRating,
  actors,
  storyline,
  genres,
}) => {
  /*  const {
    posterurl,
    title,
    year,
    imdbRating,
    actors,
    storyline,
    genres,
  } = this.props; */

  const [isLoading, setIsLoading] = useState(true);
  const [starRating, setStarRating] = useState(1);
  const [validImage, setValidImage] = useState(true);
  const [like, setLike] = useState(false);
  const [showFullscreenImage, setShowFullscreenImage] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const starRatingChange = starPosition => {
    setStarRating(starPosition);
  };

  const toggleLike = () => {
    setLike(!like);
  };

  const toggleFullscreen = () => {
    setShowFullscreenImage(!showFullscreenImage);
  };
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  /*  const goToDetails = () => {
    navigation.navigate('Details');
    console.log(navigation);
  }; */
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator color="red" size="large" />}
      {showFullscreenImage && validImage && (
        <MovieFullscreenImage
          onPress={toggleFullscreen}
          source={{ uri: posterurl }}
        />
      )}
      <MovieCardImage
        validImage={validImage}
        posterurl={posterurl}
        onError={() => setValidImage(false)}
        onLoadEnd={() => setIsLoading(false)}
        onLongPress={toggleFullscreen}
        title={title}
        storyline={storyline}
      />

      <View style={styles.likeRating}>
        <Rating heart like={like} onRatingPress={toggleLike} />
      </View>
      <Text style={[styles.title, styles.textColor]}>{title}</Text>
      <View style={styles.subtitle}>
        <Text style={[styles.description, styles.textColor]}>{year}</Text>
        <Rating star starRating={starRating} onRatingPress={starRatingChange} />

        <Text style={[styles.description, styles.textColor, styles.bigFont]}>
          {imdbRating}
        </Text>
      </View>
      <View style={styles.containerDetails}>
        <MovieDetails
          storyline={storyline}
          onPress={toggleDetails}
          showDetails={showDetails}
          title={title}
        />
      </View>
      <View style={styles.containerChip}>
        {genres.map(item => {
          return <ChipGenre genre={item} />;
        })}
      </View>
      <ActorsList actors={actors} />
    </View>
  );
};

export default MovieCard;

/* COMPONENETE CLASE */

/* export default class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      validImage: true,
      starRating: 1,
      like: false,
      showFullscreenImage: false,
      showDetails: false,
    };
  }

  starRatingChange = starPosition =>
    this.setState({ starRating: starPosition });

  toggleLike = () => this.setState(({ like }) => ({ like: !like }));

  toggleFullscreen = () =>
    this.setState(({ showFullscreenImage }) => ({
      showFullscreenImage: !showFullscreenImage,
    }));
  toggleDetails = () =>
    this.setState(({ showDetails }) => ({
      showDetails: !showDetails,
    }));
  render() {
    const {
      posterurl,
      title,
      year,
      imdbRating,
      actors,
      storyline,
      genres,
    } = this.props;
    const {
      showFullscreenImage,
      validImage,
      isLoading,
      starRating,
      like,
      showDetails,
    } = this.state;

    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator color="red" size="large" />}
        {showFullscreenImage && validImage && (
          <MovieFullscreenImage
            onPress={this.toggleFullscreen}
            source={{ uri: posterurl }}
          />
        )}
        <MovieCardImage
          validImage={validImage}
          posterurl={posterurl}
          onError={() => this.setState({ validImage: false })}
          onLoadEnd={() => this.setState({ isLoading: false })}
          onLongPress={this.toggleFullscreen}
        />

        <View style={styles.likeRating}>
          <Rating heart like={like} onRatingPress={this.toggleLike} />
        </View>
        <Text style={[styles.title, styles.textColor]}>{title}</Text>
        <View style={styles.subtitle}>
          <Text style={[styles.description, styles.textColor]}>{year}</Text>
          <Rating
            star
            starRating={starRating}
            onRatingPress={this.starRatingChange}
          />

          <Text style={[styles.description, styles.textColor, styles.bigFont]}>
            {imdbRating}
          </Text>
        </View>
        <View style={styles.containerDetails}>
          <MovieDetails
            storyline={storyline}
            onPress={this.toggleDetails}
            showDetails={showDetails}
            title={title}
          />
        </View>
        <View style={styles.containerChip}>
          {genres.map(item => {
            return <ChipGenre genre={item} />;
          })}
        </View>
        <ActorsList actors={actors} />
      </View>
    );
  }
}
 */
