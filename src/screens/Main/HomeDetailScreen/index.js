import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight,
  PanResponder,
  Animated,
  Easing,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import HomeDetailStyle from './style';
import Loader from '../../../Util/loading';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import padStart from 'lodash/padStart';
import VimeoStyle from './VimeoStyle';
import Video from 'react-native-video';

const {height} = Dimensions.get('window');

let listarry = [];
let totalcount = '';
class SearchScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  static defaultProps = {
    doubleTapTime: 130,
    playInBackground: false,
    resizeMode: 'contain',
    isFullscreen: false,
    showOnStart: true,
    paused: false,
    repeat: false,
    muted: false,
    volume: 1,
    title: '',
    rate: 1,
  };

  constructor(props) {
    super(props);

    /**
     * All of our values that are updated by the
     * methods and listeners in this class
     */
    this.state = {
      listdata: [],
      TitleData: this.props.navigation.getParam('MenuId'),
      Visible: false,
      itemValue: '',
      Index: this.props.navigation.getParam('Index'),
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
      ],

      screenHeight: 0,
      Images: null,
      Title: '',
      TamilImageArray: [],
      status: 'False',
      isVisible: false,
      Isvimeo: false,
      fullScreen: false,
      Descriotion: '',
      ContactArray: [],
      Barcode: '',

      // Video
      resizeMode: this.props.resizeMode,
      paused: this.props.paused,
      muted: this.props.muted,
      volume: this.props.volume,
      rate: this.props.rate,
      // Controls

      isFullscreen:
        this.props.isFullScreen || this.props.resizeMode === 'cover' || false,
      showTimeRemaining: true,
      volumeTrackWidth: 0,
      volumeFillWidth: 0,
      seekerFillWidth: 0,
      showControls: this.props.showOnStart,
      volumePosition: 0,
      seekerPosition: 0,
      volumeOffset: 0,
      seekerOffset: 0,
      seeking: false,
      originallyPaused: false,
      scrubbing: false,
      loading: false,
      currentTime: 0,
      error: false,
      duration: 0,
    };

    this.fetchData();

    /**
     * Any options that can be set at init.
     */
    this.opts = {
      playWhenInactive: this.props.playWhenInactive,
      playInBackground: this.props.playInBackground,
      repeat: this.props.repeat,
      title: this.props.title,
    };

    /**
     * Our app listeners and associated methods
     */
    this.events = {
      onError: this.props.onError || this._onError.bind(this),
      onBack: this.props.onBack || this._onBack.bind(this),
      onEnd: this.props.onEnd || this._onEnd.bind(this),
      onScreenTouch: this._onScreenTouch.bind(this),
      onEnterFullscreen: this.props.onEnterFullscreen,
      onExitFullscreen: this.props.onExitFullscreen,
      onShowControls: this.props.onShowControls,
      onHideControls: this.props.onHideControls,
      onLoadStart: this._onLoadStart.bind(this),
      onProgress: this._onProgress.bind(this),
      onSeek: this._onSeek.bind(this),
      onLoad: this._onLoad.bind(this),
      onPause: this.props.onPause,
      onPlay: this.props.onPlay,
    };

    /**
     * Functions used throughout the application
     */
    this.methods = {
      toggleFullscreen: this._toggleFullscreen.bind(this),
      togglePlayPause: this._togglePlayPause.bind(this),
      toggleControls: this._toggleControls.bind(this),
      toggleTimer: this._toggleTimer.bind(this),
    };

    /**
     * Player information
     */
    this.player = {
      controlTimeoutDelay: this.props.controlTimeout || 15000,
      volumePanResponder: PanResponder,
      seekPanResponder: PanResponder,
      controlTimeout: null,
      tapActionTimeout: null,
      volumeWidth: 150,
      iconOffset: 0,
      seekerWidth: 0,
      ref: Video,
      scrubbingTimeStep: this.props.scrubbing || 0,
      tapAnywhereToPause: this.props.tapAnywhereToPause,
    };

    /**
     * Various animations
     */
    const initialValue = this.props.showOnStart ? 1 : 0;

    this.animations = {
      bottomControl: {
        marginBottom: new Animated.Value(0),
        opacity: new Animated.Value(initialValue),
      },
      topControl: {
        marginTop: new Animated.Value(0),
        opacity: new Animated.Value(initialValue),
      },
      video: {
        opacity: new Animated.Value(1),
      },
      loader: {
        rotate: new Animated.Value(0),
        MAX_VALUE: 360,
      },
    };

    /**
     * Various styles that be added...
     */
    this.styles = {
      videoStyle: this.props.videoStyle || {},
      containerStyle: this.props.style || {},
    };
  }

  /**
  | -------------------------------------------------------
  | Events
  | -------------------------------------------------------
  |
  | These are the events that the <Video> component uses
  | and can be overridden by assigning it as a prop.
  | It is suggested that you override onEnd.
  |
  */

  /**
   * When load starts we display a loading icon
   * and show the controls.
   */
  _onLoadStart() {
    let state = this.state;
    state.loading = true;
    this.loadAnimation();
    this.setState(state);

    if (typeof this.props.onLoadStart === 'function') {
      this.props.onLoadStart(...arguments);
    }
  }

  /**
   * When load is finished we hide the load icon
   * and hide the controls. We also set the
   * video duration.
   *
   * @param {object} data The video meta data
   */
  _onLoad(data = {}) {
    let state = this.state;

    state.duration = data.duration;
    state.loading = false;
    this.setState(state);

    if (state.showControls) {
      this.setControlTimeout();
    }

    if (typeof this.props.onLoad === 'function') {
      this.props.onLoad(...arguments);
    }
  }

  /**
   * For onprogress we fire listeners that
   * update our seekbar and timer.
   *
   * @param {object} data The video meta data
   */
  _onProgress(data = {}) {
    let state = this.state;
    if (!state.scrubbing) {
      state.currentTime = data.currentTime;

      if (!state.seeking) {
        const position = this.calculateSeekerPosition();
        this.setSeekerPosition(position);
      }

      if (typeof this.props.onProgress === 'function') {
        this.props.onProgress(...arguments);
      }

      this.setState(state);
    }
  }

  /**
   * For onSeek we clear scrubbing if set.
   *
   * @param {object} data The video meta data
   */
  _onSeek(data = {}) {
    let state = this.state;
    if (state.scrubbing) {
      state.scrubbing = false;
      state.currentTime = data.currentTime;

      // Seeking may be false here if the user released the seek bar while the player was still processing
      // the last seek command. In this case, perform the steps that have been postponed.
      if (!state.seeking) {
        this.setControlTimeout();
        state.paused = state.originallyPaused;
      }

      this.setState(state);
    }
  }

  /**
   * It is suggested that you override this
   * command so your app knows what to do.
   * Either close the video or go to a
   * new page.
   */
  _onEnd() {}

  /**
   * Set the error state to true which then
   * changes our renderError function
   *
   * @param {object} err  Err obj returned from <Video> component
   */
  _onError(err) {
    let state = this.state;
    state.error = true;
    state.loading = false;

    this.setState(state);
  }

  /**
   * This is a single and double tap listener
   * when the user taps the screen anywhere.
   * One tap toggles controls and/or toggles pause,
   * two toggles fullscreen mode.
   */
  _onScreenTouch() {
    if (this.player.tapActionTimeout) {
      clearTimeout(this.player.tapActionTimeout);
      this.player.tapActionTimeout = 0;
      this.methods.toggleFullscreen();
      const state = this.state;
      if (state.showControls) {
        this.resetControlTimeout();
      }
    } else {
      this.player.tapActionTimeout = setTimeout(() => {
        const state = this.state;
        if (this.player.tapAnywhereToPause && state.showControls) {
          this.methods.togglePlayPause();
          this.resetControlTimeout();
        } else {
          this.methods.toggleControls();
        }
        this.player.tapActionTimeout = 0;
      }, this.props.doubleTapTime);
    }
  }

  /**
  | -------------------------------------------------------
  | Methods
  | -------------------------------------------------------
  |
  | These are all of our functions that interact with
  | various parts of the class. Anything from
  | calculating time remaining in a video
  | to handling control operations.
  |
  */

  /**
   * Set a timeout when the controls are shown
   * that hides them after a length of time.
   * Default is 15s
   */
  setControlTimeout() {
    this.player.controlTimeout = setTimeout(() => {
      this._hideControls();
    }, this.player.controlTimeoutDelay);
  }

  /**
   * Clear the hide controls timeout.
   */
  clearControlTimeout() {
    clearTimeout(this.player.controlTimeout);
  }

  /**
   * Reset the timer completely
   */
  resetControlTimeout() {
    this.clearControlTimeout();
    this.setControlTimeout();
  }

  /**
   * Animation to hide controls. We fade the
   * display to 0 then move them off the
   * screen so they're not interactable
   */
  hideControlAnimation() {
    Animated.parallel([
      Animated.timing(this.animations.topControl.opacity, {
        toValue: 0,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.topControl.marginTop, {
        toValue: -100,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.bottomControl.opacity, {
        toValue: 0,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
      Animated.timing(this.animations.bottomControl.marginBottom, {
        toValue: -100,
        duration: this.props.controlAnimationTiming,
        useNativeDriver: false,
      }),
    ]).start();
  }

  /**
   * Animation to show controls...opposite of
   * above...move onto the screen and then
   * fade in.
   */
  showControlAnimation() {
    Animated.parallel([
      Animated.timing(this.animations.topControl.opacity, {
        toValue: 1,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.topControl.marginTop, {
        toValue: 0,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.bottomControl.opacity, {
        toValue: 1,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
      Animated.timing(this.animations.bottomControl.marginBottom, {
        toValue: 0,
        useNativeDriver: false,
        duration: this.props.controlAnimationTiming,
      }),
    ]).start();
  }

  /**
   * Loop animation to spin loader icon. If not loading then stop loop.
   */
  loadAnimation() {
    if (this.state.loading) {
      Animated.sequence([
        Animated.timing(this.animations.loader.rotate, {
          toValue: this.animations.loader.MAX_VALUE,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(this.animations.loader.rotate, {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]).start(this.loadAnimation.bind(this));
    }
  }

  /**
   * Function to hide the controls. Sets our
   * state then calls the animation.
   */
  _hideControls() {
    if (this.mounted) {
      let state = this.state;
      state.showControls = false;
      this.hideControlAnimation();

      this.setState(state);
    }
  }

  /**
   * Function to toggle controls based on
   * current state.
   */
  _toggleControls() {
    let state = this.state;
    state.showControls = !state.showControls;

    if (state.showControls) {
      this.showControlAnimation();
      this.setControlTimeout();
      typeof this.events.onShowControls === 'function' &&
        this.events.onShowControls();
    } else {
      this.hideControlAnimation();
      this.clearControlTimeout();
      typeof this.events.onHideControls === 'function' &&
        this.events.onHideControls();
    }

    this.setState(state);
  }

  /**
   * Toggle fullscreen changes resizeMode on
   * the <Video> component then updates the
   * isFullscreen state.
   */
  _toggleFullscreen() {
    let state = this.state;

    state.isFullscreen = !state.isFullscreen;

    if (this.props.toggleResizeModeOnFullscreen) {
      state.resizeMode = state.isFullscreen === true ? 'cover' : 'contain';
    }

    if (state.isFullscreen) {
      typeof this.events.onEnterFullscreen === 'function' &&
        this.events.onEnterFullscreen();
    } else {
      typeof this.events.onExitFullscreen === 'function' &&
        this.events.onExitFullscreen();
    }

    this.setState(state);
  }

  /**
   * Toggle playing state on <Video> component
   */
  _togglePlayPause() {
    let state = this.state;
    state.paused = !state.paused;

    if (state.paused) {
      typeof this.events.onPause === 'function' && this.events.onPause();
    } else {
      typeof this.events.onPlay === 'function' && this.events.onPlay();
    }

    this.setState(state);
  }

  /**
   * Toggle between showing time remaining or
   * video duration in the timer control
   */
  _toggleTimer() {
    let state = this.state;
    state.showTimeRemaining = !state.showTimeRemaining;
    this.setState(state);
  }

  /**
   * The default 'onBack' function pops the navigator
   * and as such the video player requires a
   * navigator prop by default.
   */
  _onBack() {
    if (this.props.navigator && this.props.navigator.pop) {
      this.props.navigator.pop();
    } else {
      this.setState({
        Isvimeo: false,
      });
    }
  }

  /**
   * Calculate the time to show in the timer area
   * based on if they want to see time remaining
   * or duration. Formatted to look as 00:00.
   */
  calculateTime() {
    if (this.state.showTimeRemaining) {
      const time = this.state.duration - this.state.currentTime;
      return `-${this.formatTime(time)}`;
    }

    return this.formatTime(this.state.currentTime);
  }

  /**
   * Format a time string as mm:ss
   *
   * @param {int} time time in milliseconds
   * @return {string} formatted time string in mm:ss format
   */
  formatTime(time = 0) {
    const symbol = this.state.showRemainingTime ? '-' : '';
    time = Math.min(Math.max(time, 0), this.state.duration);

    const formattedMinutes = padStart(Math.floor(time / 60).toFixed(0), 2, 0);
    const formattedSeconds = padStart(Math.floor(time % 60).toFixed(0), 2, 0);

    return `${symbol}${formattedMinutes}:${formattedSeconds}`;
  }

  /**
   * Set the position of the seekbar's components
   * (both fill and handle) according to the
   * position supplied.
   *
   * @param {float} position position in px of seeker handle}
   */
  setSeekerPosition(position = 0) {
    let state = this.state;
    position = this.constrainToSeekerMinMax(position);

    state.seekerFillWidth = position;
    state.seekerPosition = position;

    if (!state.seeking) {
      state.seekerOffset = position;
    }

    this.setState(state);
  }

  /**
   * Constrain the location of the seeker to the
   * min/max value based on how big the
   * seeker is.
   *
   * @param {float} val position of seeker handle in px
   * @return {float} constrained position of seeker handle in px
   */
  constrainToSeekerMinMax(val = 0) {
    if (val <= 0) {
      return 0;
    } else if (val >= this.player.seekerWidth) {
      return this.player.seekerWidth;
    }
    return val;
  }

  /**
   * Calculate the position that the seeker should be
   * at along its track.
   *
   * @return {float} position of seeker handle in px based on currentTime
   */
  calculateSeekerPosition() {
    const percent = this.state.currentTime / this.state.duration;
    return this.player.seekerWidth * percent;
  }

  /**
   * Return the time that the video should be at
   * based on where the seeker handle is.
   *
   * @return {float} time in ms based on seekerPosition.
   */
  calculateTimeFromSeekerPosition() {
    const percent = this.state.seekerPosition / this.player.seekerWidth;
    return this.state.duration * percent;
  }

  /**
   * Seek to a time in the video.
   *
   * @param {float} time time to seek to in ms
   */
  seekTo(time = 0) {
    let state = this.state;
    state.currentTime = time;
    this.player.ref.seek(time);
    this.setState(state);
  }

  /**
   * Set the position of the volume slider
   *
   * @param {float} position position of the volume handle in px
   */
  setVolumePosition(position = 0) {
    let state = this.state;
    position = this.constrainToVolumeMinMax(position);
    state.volumePosition = position + this.player.iconOffset;
    state.volumeFillWidth = position;

    state.volumeTrackWidth = this.player.volumeWidth - state.volumeFillWidth;

    if (state.volumeFillWidth < 0) {
      state.volumeFillWidth = 0;
    }

    if (state.volumeTrackWidth > 150) {
      state.volumeTrackWidth = 150;
    }

    this.setState(state);
  }

  /**
   * Constrain the volume bar to the min/max of
   * its track's width.
   *
   * @param {float} val position of the volume handle in px
   * @return {float} contrained position of the volume handle in px
   */
  constrainToVolumeMinMax(val = 0) {
    if (val <= 0) {
      return 0;
    } else if (val >= this.player.volumeWidth + 9) {
      return this.player.volumeWidth + 9;
    }
    return val;
  }

  /**
   * Get the volume based on the position of the
   * volume object.
   *
   * @return {float} volume level based on volume handle position
   */
  calculateVolumeFromVolumePosition() {
    return this.state.volumePosition / this.player.volumeWidth;
  }

  /**
   * Get the position of the volume handle based
   * on the volume
   *
   * @return {float} volume handle position in px based on volume
   */
  calculateVolumePositionFromVolume() {
    return this.player.volumeWidth * this.state.volume;
  }

  /**
  | -------------------------------------------------------
  | React Component functions
  | -------------------------------------------------------
  |
  | Here we're initializing our listeners and getting
  | the component ready using the built-in React
  | Component methods
  |
  */

  /**
   * Before mounting, init our seekbar and volume bar
   * pan responders.
   */
  UNSAFE_componentWillMount() {
    this.initSeekPanResponder();
    this.initVolumePanResponder();
  }

  /**
   * To allow basic playback management from the outside
   * we have to handle possible props changes to state changes
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.state.paused !== nextProps.paused) {
      this.setState({
        paused: nextProps.paused,
      });
    }

    if (this.styles.videoStyle !== nextProps.videoStyle) {
      this.styles.videoStyle = nextProps.videoStyle;
    }

    if (this.styles.containerStyle !== nextProps.style) {
      this.styles.containerStyle = nextProps.style;
    }
  }

  static navigationOptions = {
    header: null,
  };
  state = {
    screenHeight: 0,
    Images: null,
    Title: '',
    TamilImageArray: [],
    status: 'False',
    isVisible: false,
    Isvimeo: false,
    fullScreen: false,
    Descriotion: '',
    ContactArray: [],
    Barcode: '',
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({screenHeight: contentHeight});
  };
  componentDidMount() {
    const position = this.calculateVolumePositionFromVolume();
    let state = this.state;
    this.setVolumePosition(position);
    state.volumeOffset = position;
    this.mounted = true;

    this.setState(state);

    const VIMEO_ID = '76979871';
    fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          thumbnailUrl: res.video.thumbs['640'],
          videoUrl:
            res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
          video: res.video,
        }),
      );
  }
  // renderData=()=>{
  //     if(this.state.status == 'True'){
  //          return (
  //              <View style={{flex:2}}>
  //              <Text>Hi djhkjh</Text>
  //              </View>
  //          )
  //     }
  // }

  onFullScreen = (fullScreen) => {
    this.setState({fullScreen});
  };

  play = () => {
    this.play.playVideo();
  };
  pause = () => {
    this.play.pauseVideo();
  };

  seekTo = (s) => {
    this.player.seekTo(s);
  };

  componentWillUnmount() {
    this.mounted = false;
    this.clearControlTimeout();
  }

  /**
   * Get our seekbar responder going
   */
  initSeekPanResponder() {
    this.player.seekPanResponder = PanResponder.create({
      // Ask to be the responder.
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,

      /**
       * When we start the pan tell the machine that we're
       * seeking. This stops it from updating the seekbar
       * position in the onProgress listener.
       */
      onPanResponderGrant: (evt, gestureState) => {
        let state = this.state;
        this.clearControlTimeout();
        const position = evt.nativeEvent.locationX;
        this.setSeekerPosition(position);
        state.seeking = true;
        state.originallyPaused = state.paused;
        state.scrubbing = false;
        if (this.player.scrubbingTimeStep > 0) {
          state.paused = true;
        }
        this.setState(state);
      },

      /**
       * When panning, update the seekbar position, duh.
       */
      onPanResponderMove: (evt, gestureState) => {
        const position = this.state.seekerOffset + gestureState.dx;
        this.setSeekerPosition(position);
        let state = this.state;

        if (
          this.player.scrubbingTimeStep > 0 &&
          !state.loading &&
          !state.scrubbing
        ) {
          const time = this.calculateTimeFromSeekerPosition();
          const timeDifference = Math.abs(state.currentTime - time) * 1000;

          if (
            time < state.duration &&
            timeDifference >= this.player.scrubbingTimeStep
          ) {
            state.scrubbing = true;

            this.setState(state);
            setTimeout(() => {
              this.player.ref.seek(time, this.player.scrubbingTimeStep);
            }, 1);
          }
        }
      },

      /**
       * On release we update the time and seek to it in the video.
       * If you seek to the end of the video we fire the
       * onEnd callback
       */
      onPanResponderRelease: (evt, gestureState) => {
        const time = this.calculateTimeFromSeekerPosition();
        let state = this.state;
        if (time >= state.duration && !state.loading) {
          state.paused = true;
          this.events.onEnd();
        } else if (state.scrubbing) {
          state.seeking = false;
        } else {
          this.seekTo(time);
          this.setControlTimeout();
          state.paused = state.originallyPaused;
          state.seeking = false;
        }
        this.setState(state);
      },
    });
  }

  /**
   * Initialize the volume pan responder.
   */
  initVolumePanResponder() {
    this.player.volumePanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.clearControlTimeout();
      },

      /**
       * Update the volume as we change the position.
       * If we go to 0 then turn on the mute prop
       * to avoid that weird static-y sound.
       */
      onPanResponderMove: (evt, gestureState) => {
        let state = this.state;
        const position = this.state.volumeOffset + gestureState.dx;

        this.setVolumePosition(position);
        state.volume = this.calculateVolumeFromVolumePosition();

        if (state.volume <= 0) {
          state.muted = true;
        } else {
          state.muted = false;
        }

        this.setState(state);
      },

      /**
       * Update the offset...
       */
      onPanResponderRelease: (evt, gestureState) => {
        let state = this.state;
        state.volumeOffset = state.volumePosition;
        this.setControlTimeout();
        this.setState(state);
      },
    });
  }

  /**
  | -------------------------------------------------------
  | Rendering
  | -------------------------------------------------------
  |
  | This section contains all of our render methods.
  | In addition to the typical React render func
  | we also have all the render methods for
  | the controls.
  |
  */

  /**
   * Standard render control function that handles
   * everything except the sliders. Adds a
   * consistent <TouchableHighlight>
   * wrapper and styling.
   */
  renderControl(children, callback, style = {}) {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        activeOpacity={0.3}
        onPress={() => {
          this.resetControlTimeout();
          callback();
        }}
        style={[VimeoStyle.controls.control, style]}>
        {children}
      </TouchableHighlight>
    );
  }

  /**
   * Renders an empty control, used to disable a control without breaking the view layout.
   */
  renderNullControl() {
    return <View style={[VimeoStyle.controls.control]} />;
  }

  /**
   * Groups the top bar controls together in an animated
   * view and spaces them out.
   */
  renderTopControls() {
    const backControl = this.props.disableBack
      ? this.renderNullControl()
      : this.renderBack();
    const volumeControl = this.props.disableVolume
      ? this.renderNullControl()
      : this.renderVolume();
    const fullscreenControl = this.props.disableFullscreen
      ? this.renderNullControl()
      : this.renderFullscreen();

    return (
      <Animated.View
        style={[
          VimeoStyle.controls.top,
          {
            opacity: this.animations.topControl.opacity,
            marginTop: this.animations.topControl.marginTop,
          },
        ]}>
        <ImageBackground
          source={require('../../../assets/VimeoIcons/top-vignette.png')}
          style={[VimeoStyle.controls.column]}
          imageStyle={[VimeoStyle.controls.vignette]}>
          <SafeAreaView style={VimeoStyle.controls.topControlGroup}>
            {backControl}
            <View style={VimeoStyle.controls.pullRight}>
              {volumeControl}
              {fullscreenControl}
            </View>
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    );
  }

  /**
   * Back button control
   */
  renderBack() {
    return this.renderControl(
      <Image
        source={require('../../../assets/VimeoIcons/back.png')}
        style={VimeoStyle.controls.back}
      />,
      this.events.onBack,
      VimeoStyle.controls.back,
    );
  }

  /**
   * Render the volume slider and attach the pan handlers
   */
  renderVolume() {
    return (
      <View style={VimeoStyle.volume.container}>
        <View
          style={[VimeoStyle.volume.fill, {width: this.state.volumeFillWidth}]}
        />
        <View
          style={[
            VimeoStyle.volume.track,
            {width: this.state.volumeTrackWidth},
          ]}
        />
        <View
          style={[VimeoStyle.volume.handle, {left: this.state.volumePosition}]}
          {...this.player.volumePanResponder.panHandlers}>
          <Image
            style={VimeoStyle.volume.icon}
            source={require('../../../assets/VimeoIcons/volume.png')}
          />
        </View>
      </View>
    );
  }

  /**
   * Render fullscreen toggle and set icon based on the fullscreen state.
   */
  renderFullscreen() {
    let source =
      this.state.isFullscreen === true
        ? require('../../../assets/VimeoIcons/shrink.png')
        : require('../../../assets/VimeoIcons/expand.png');
    return this.renderControl(
      <Image source={source} />,
      this.methods.toggleFullscreen,
      VimeoStyle.controls.fullscreen,
    );
  }

  /**
   * Render bottom control group and wrap it in a holder
   */
  renderBottomControls() {
    const timerControl = this.props.disableTimer
      ? this.renderNullControl()
      : this.renderTimer();
    const seekbarControl = this.props.disableSeekbar
      ? this.renderNullControl()
      : this.renderSeekbar();
    const playPauseControl = this.props.disablePlayPause
      ? this.renderNullControl()
      : this.renderPlayPause();

    return (
      <Animated.View
        style={[
          VimeoStyle.controls.bottom,
          {
            opacity: this.animations.bottomControl.opacity,
            marginBottom: this.animations.bottomControl.marginBottom,
          },
        ]}>
        <ImageBackground
          source={require('../../../assets/VimeoIcons/bottom-vignette.png')}
          style={[VimeoStyle.controls.column]}
          imageStyle={[VimeoStyle.controls.vignette]}>
          {seekbarControl}
          <SafeAreaView
            style={[
              VimeoStyle.controls.row,
              VimeoStyle.controls.bottomControlGroup,
            ]}>
            {playPauseControl}
            {this.renderTitle()}
            {timerControl}
          </SafeAreaView>
        </ImageBackground>
      </Animated.View>
    );
  }

  /**
   * Render the seekbar and attach its handlers
   */
  renderSeekbar() {
    return (
      <View
        style={VimeoStyle.seekbar.container}
        collapsable={false}
        {...this.player.seekPanResponder.panHandlers}>
        <View
          style={VimeoStyle.seekbar.track}
          onLayout={(event) =>
            (this.player.seekerWidth = event.nativeEvent.layout.width)
          }
          pointerEvents={'none'}>
          <View
            style={[
              VimeoStyle.seekbar.fill,
              {
                width: this.state.seekerFillWidth,
                backgroundColor: this.props.seekColor || '#FFF',
              },
            ]}
            pointerEvents={'none'}
          />
        </View>
        <View
          style={[VimeoStyle.seekbar.handle, {left: this.state.seekerPosition}]}
          pointerEvents={'none'}>
          <View
            style={[
              VimeoStyle.seekbar.circle,
              {backgroundColor: this.props.seekColor || '#FFF'},
            ]}
            pointerEvents={'none'}
          />
        </View>
      </View>
    );
  }

  /**
   * Render the play/pause button and show the respective icon
   */
  renderPlayPause() {
    let source =
      this.state.paused === true
        ? require('../../../assets/VimeoIcons/play.png')
        : require('../../../assets/VimeoIcons/pause.png');
    return this.renderControl(
      <Image source={source} />,
      this.methods.togglePlayPause,
      VimeoStyle.controls.playPause,
    );
  }

  /**
   * Render our title...if supplied.
   */
  renderTitle() {
    if (this.opts.title) {
      return (
        <View style={[VimeoStyle.controls.control, VimeoStyle.controls.title]}>
          <Text
            style={[VimeoStyle.controls.text, VimeoStyle.controls.titleText]}
            numberOfLines={1}>
            {this.opts.title || ''}
          </Text>
        </View>
      );
    }

    return null;
  }

  /**
   * Show our timer.
   */
  renderTimer() {
    return this.renderControl(
      <Text style={VimeoStyle.controls.timerText}>{this.calculateTime()}</Text>,
      this.methods.toggleTimer,
      VimeoStyle.controls.timer,
    );
  }

  /**
   * Show loading icon
   */
  renderLoader() {
    if (this.state.loading) {
      return (
        <View style={VimeoStyle.loader.container}>
          <Animated.Image
            source={require('../../../assets/VimeoIcons/loader-icon.png')}
            style={[
              VimeoStyle.loader.icon,
              {
                transform: [
                  {
                    rotate: this.animations.loader.rotate.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
      );
    }
    return null;
  }

  renderError() {
    if (this.state.error) {
      return (
        <View style={VimeoStyle.error.container}>
          <Image
            source={require('../../../assets/VimeoIcons/error-icon.png')}
            style={VimeoStyle.error.icon}
          />
          <Text style={VimeoStyle.error.text}>Video unavailable</Text>
        </View>
      );
    }
    return null;
  }

  fetchData = async () => {
    const {Menu} = this.props;
    Menu.map((item, key) => listarry.push(item.sub_pages));
  };

  renderdata = (item) => {
    if (item.sub_pages.length == 0) {
    } else {
      return (
        <View style={HomeDetailStyle.articleListView}>
          <FlatList
            data={item.sub_pages}
            style={HomeDetailStyle.articleFlatList}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={HomeDetailStyle.articleFlatListViewContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('detail', {
                      DetailsKey: item.object_id,
                    });
                  }}
                  style={HomeDetailStyle.articleFlatListTouch}>
                  <View style={HomeDetailStyle.articleFlatListView}>
                    <View style={HomeDetailStyle.articleFlatListView2}>
                      <Image
                        source={require('../../../assets/Icons/a_icon.png')}
                        style={HomeDetailStyle.articleIcon}
                      />
                    </View>
                    <View>
                      <Text style={HomeDetailStyle.articleText}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      );
    }
  };

  render() {
    const {Menu, isFetching} = this.props;

    listarry[this.state.Index].map((item, key) =>
      console.log('ndjndjn' + item.sub_pages.length),
    );

    return (
      <View style={HomeDetailStyle.container}>
        {isFetching ? <Loader /> : null}
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
        <TouchableOpacity
          style={HomeDetailStyle.homeIconContainer}
          onPress={() => {
            this.props.navigation.navigate('HomeScreenPage');
          }}>
          <Image
            source={require('../../../assets/Icons/homeIcon.png')}
            resizeMode={'stretch'}
            style={HomeDetailStyle.homeIcon}
          />
        </TouchableOpacity>

        <ScrollView>
          <View style={HomeDetailStyle.text}>
            <Text style={HomeDetailStyle.all}>{this.state.TitleData}</Text>
          </View>
          <FlatList
            style={HomeDetailStyle.flatlist}
            data={listarry[this.state.Index]}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={HomeDetailStyle.flatlistContainer}>
                <View style={HomeDetailStyle.view1}>
                  <TouchableOpacity
                    onPress={() => this.setState({Isvimeo: true})}>
                    <View style={HomeDetailStyle.flatlistView}>
                      <View style={[HomeDetailStyle.view2, {width: '18%'}]}>
                        <Image
                          source={{
                            uri:
                              'http://app.lea.one/wp-content/uploads/2020/08/microphone.png',
                          }}
                          style={HomeDetailStyle.flatlistImage}
                          resizeMode={'center'}
                        />
                      </View>
                      <View style={HomeDetailStyle.view3}>
                        <Text style={HomeDetailStyle.titleText}>
                          {item.title}
                        </Text>
                        <Text style={HomeDetailStyle.articleText}>
                          {item.sub_pages.length} Articles
                        </Text>
                      </View>

                      <View style={HomeDetailStyle.view4}>
                        <Image
                          style={HomeDetailStyle.playIcon}
                          source={require('../../../assets/Icons/play_icon.png')}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                {this.renderdata(item)}
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
        <Modal isVisible={this.state.Isvimeo}>
          <TouchableWithoutFeedback
            onPress={this.events.onScreenTouch}
            style={[VimeoStyle.player.container, this.styles.containerStyle]}>
            <View
              style={[VimeoStyle.player.container, this.styles.containerStyle]}>
              <Video
                {...this.props}
                ref={(videoPlayer) => (this.player.ref = videoPlayer)}
                resizeMode={this.state.resizeMode}
                volume={this.state.volume}
                paused={this.state.paused}
                muted={this.state.muted}
                rate={this.state.rate}
                onLoadStart={this.events.onLoadStart}
                onProgress={this.events.onProgress}
                onError={this.events.onError}
                onLoad={this.events.onLoad}
                onEnd={this.events.onEnd}
                onSeek={this.events.onSeek}
                onBack={this.state.Isvimeo}
                style={[VimeoStyle.player.video, this.styles.videoStyle]}
                source={{uri: this.state.videoUrl}}
              />
              {this.renderError()}
              {this.renderLoader()}
              {this.renderTopControls()}
              {this.renderBottomControls()}
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    Menu: state.Menu,
  };
};
export default connect(mapStateToProps)(SearchScreen);
