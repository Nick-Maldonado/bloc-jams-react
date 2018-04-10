	import React, { Component } from 'react';

	class PlayerBar extends Component {
		render() {
			return (
				<section className="player-bar">
          <div id="currently-playing">Song Name Here</div>
          <section id="volume-control">
						<div className="icon ion-volume-low"></div>
						<input 
							type="range" 
							className="seek-bar" 
							value={this.props.volume}
							onChange={this.props.handleVolumeChange}
							max="1"
							min="0"
							step="0.01"
						/>
						<div className="icon ion-volume-high"></div>
					</section>
					<section id="buttons">
						<button id="previous" onClick={this.props.handlePrevClick}>
							<span className="ion-skip-backward"></span>
						</button>
						<button id="play-pause" onClick={this.props.handleSongClick} >
							<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
						</button>
						<button id="next" onClick={this.props.handleNextClick}>
							<span className="ion-skip-forward"></span>
						</button>
					</section>
          {/* <section id="cover-art">
            <img src={this.props.coverArt}/>
          </section> */}
					<section id="time-control">                                                                    
						<div className="current-time">{this.props.displayTime}</div>
						<input 
							type="range" 
							className="seek-bar" 
							value={(this.props.currentTime / this.props.duration) || 0} 
							max="1" 
							min="0" 
							step="0.01"
							onChange={this.props.handleTimeChange} 
						/>   
						<div className="total-time">{this.props.displayDuration}</div> 
					</section>
			</section>
			);
		}
	}

	export default PlayerBar;