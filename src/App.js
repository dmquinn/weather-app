import React, { useState, useEffect } from "react";
import Humidity from "./Humidity.svg";
import Wind from "./Wind.svg";
import Location from "./Search.svg";

const api = {
	key: "1e497a45eaa6dd366c6253930349f6fc",
	base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({ list: [] });
	const [backgroundImg, setBackgroundImg] = useState("");
	const [mainIcon, setMainIcon] = useState("");
	const [icons, setIcons] = useState([]);
	const [error, setError] = useState(null);
	const search = (evt) => {
		if (evt.key === "Enter") {
			try {
				fetch(
					`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
				)
					.then((res) => res.json())
					.then((result) => {
						setWeather(result);
						setQuery("");
						setBackgroundImg(
							`https://source.unsplash.com/featured/?${query}` ||
								"https://images.unsplash.com/photo-1498857006179-0ab79e24640b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
						);
						if (result.weather[0].main == "Rain") {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg"
							);
						} else if (
							result.weather[0].description == "clear sky"
						) {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg"
							);
						} else if (
							result.weather[0].description ==
								"scattered clouds" ||
							result.weather[0].description == "few clouds"
						) {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Scattered_c1m5up.svg"
							);
						} else if (result.weather[0].main == "Snow") {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg"
							);
						} else if (
							result.weather[0].description == "broken clouds"
						) {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Broken_of6ay5.svg"
							);
						} else if (
							result.weather[0].description == "overcast clouds"
						) {
							setMainIcon(
								"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg"
							);
						}
					});
				fetch(
					`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`
				)
					.then((res) => res.json())
					.then((result) => {
						if (result.message === "city not found") {
							setError("city not found");
						} else {
							setIcons([]);
							console.log("result ssss", result);
							setForecast(result);

							let array = [];
							for (let i = 0; i < 4; i++) {
								if (result.list[i].weather[0].main == "Rain") {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg";
								} else if (
									result.list[i].weather[0].description ==
									"clear sky"
								) {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg";
								} else if (
									result.list[i].weather[0].description ==
										"scattered clouds" ||
									result.list[i].weather[0].description ==
										"few clouds"
								) {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Scattered_c1m5up.svg";
								} else if (
									result.list[i].weather[0].main == "Snow"
								) {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg";
								} else if (
									result.list[i].weather[0].description ==
									"broken clouds"
								) {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Broken_of6ay5.svg";
								} else if (
									result.list[i].weather[0].description ==
									"overcast clouds"
								) {
									array[i] =
										"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg";
								}
							}
							setIcons(array);

							console.log("forecast", result);
						}
					});
			} catch (error) {
				console.log("working here", error);
			}
		}
	};
	let today = new Date();
	let date = today.getDate();
	let month = today.getMonth() + 1;
	let year = today.getFullYear();
	const dateToday = () => {
		let tod = new Date(today.getTime()).toDateString().split("2021");
		return tod;
	};
	const tomorrow = () => {
		let tomorrow = new Date(today.getTime() + 1000 * 60 * 60 * 24)
			.toDateString()
			.split("2021");
		return tomorrow;
	};
	const tomorrowPlusOne = () => {
		let tomorrow = new Date(today.getTime() + 2000 * 60 * 60 * 24)
			.toDateString()
			.split("2021");
		return tomorrow;
	};
	const tomorrowPlusTwo = () => {
		let tomorrow = new Date(today.getTime() + 3000 * 60 * 60 * 24)
			.toDateString()
			.split("2021");
		return tomorrow;
	};
	const tomorrowPlusThree = () => {
		let tomorrow = new Date(today.getTime() + 4000 * 60 * 60 * 24)
			.toDateString()
			.split("2021");
		return tomorrow;
	};

	useEffect(() => {
		fetch(`${api.base}weather?q=berlin&units=metric&APPID=${api.key}`)
			.then((res) => res.json())
			.then((result) => {
				setWeather(result);
				setQuery("");
				setBackgroundImg(
					`https://source.unsplash.com/featured/?berlin` ||
						"https://images.unsplash.com/photo-1498857006179-0ab79e24640b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				);
				if (result.weather[0].main == "Rain") {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg"
					);
				} else if (result.weather[0].description == "clear sky") {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg"
					);
				} else if (
					result.weather[0].description == "scattered clouds" ||
					result.weather[0].description == "few clouds"
				) {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Scattered_c1m5up.svg"
					);
				} else if (result.weather[0].main == "Snow") {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg"
					);
				} else if (result.weather[0].description == "broken clouds") {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Broken_of6ay5.svg"
					);
				} else if (result.weather[0].description == "overcast clouds") {
					setMainIcon(
						"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg"
					);
				}
				console.log("weather", result);
			});
		fetch(`${api.base}forecast?q=berlin&units=metric&APPID=${api.key}`)
			.then((res) => res.json())
			.then((result) => {
				setForecast(result);
				setIcons([]);
				let array = [];
				for (let i = 0; i < 4; i++) {
					if (result.list[i].weather[0].main === "Clouds") {
						array[i] =
							"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clouds_nrdjl4.svg";
					} else if (result.list[i].weather[0].main === "Clear") {
						array[i] =
							"https://res.cloudinary.com/danielmurphy/image/upload/v1615705290/weatherApp/Clear_cdl7go.svg";
					} else if (result.list[i].weather[0].main === "Rain") {
						array[i] =
							"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Rain_xfluyi.svg";
					} else if (result.list[i].weather[0].main === "Snow") {
						array[i] =
							"https://res.cloudinary.com/danielmurphy/image/upload/v1615705288/weatherApp/Snow_optz8i.svg";
					}
				}
				setIcons(array);

				console.log("useEffectForecast", result);
			});
	}, []);

	return (
		<>
			{weather.main === "undefined" ? (
				<h1>CITY NOT FOUND</h1>
			) : (
				<div
					className={
						typeof weather.main != "undefined"
							? weather.main.temp > 16
								? "app warm"
								: "app"
							: "app"
					}
				>
					<main>
						{!!backgroundImg && (
							<img
								className="backgroundImg"
								src={backgroundImg}
								alt=""
							></img>
						)}

						<div className="search-box">
							<img
								src={Location}
								alt=""
								className="additionalIcons locationIcon"
							></img>

							<input
								autoComplete="off"
								id="iconified"
								type="text"
								className="search-bar"
								placeholder=""
								onChange={(e) => setQuery(e.target.value)}
								value={query}
								onKeyPress={search}
							></input>
						</div>
						{/* {!!error && <h2>{error}</h2>} */}
						{typeof weather.main != "undefined" ? (
							<div>
								<div className="location-box">
									<div className="location">
										{weather.name}, {weather.sys.country}
									</div>
									<h3>{dateToday()}</h3>

									<div className="weather-box">
										<div className="temp">
											{Math.round(weather.main.temp)}°c
										</div>
										<img
											className="mainIcon"
											src={mainIcon}
											alt=""
										></img>
										<h2>
											{weather.weather[0].description}
										</h2>
									</div>
								</div>
								<div className="additional">
									<h4>
										<img
											src={Humidity}
											className="additionalIcons humidityIcon"
											alt=""
										></img>
										{"   "}
										Humidity : {weather.main.humidity}%
									</h4>
									<h4 style={{ marginTop: "10px" }}>
										{" "}
										<img
											src={Wind}
											className="additionalIcons windIcon"
											alt=""
										></img>{" "}
										Wind : {weather.main.humidity} km/hr
									</h4>
								</div>
							</div>
						) : (
							""
						)}
						{typeof forecast.list != "undefined" && (
							<>
								{forecast.list.length > 0 && !!icons && (
									<>
										<div className="forecastTempRow">
											<div className="forecacstColOne">
												<div>{tomorrow()}</div>
												<img
													className="icon"
													src={icons[0]}
													alt=""
												></img>
												<div>
													{Math.round(
														forecast.list[0].main
															.temp_max
													)}
													°c{" "}
													<small
														style={{
															color: "grey",
														}}
													>
														{Math.round(
															forecast.list[0]
																.main.temp_min
														)}
														°c
													</small>
												</div>
											</div>
											<div className="forecaseColTwo">
												<div>{tomorrowPlusOne()}</div>
												<img
													className="icon"
													src={icons[1]}
													alt=""
												></img>
												<div>
													{Math.round(
														forecast.list[1].main
															.temp_max
													)}
													°c{" "}
													<small
														style={{
															color: "grey",
														}}
													>
														{Math.round(
															forecast.list[1]
																.main.temp_min
														)}
														°c
													</small>
												</div>{" "}
											</div>
											<div className="forecastColThree">
												<div>{tomorrowPlusTwo()}</div>
												<img
													className="icon"
													src={icons[2]}
													alt=""
												></img>
												<div>
													{Math.round(
														forecast.list[2].main
															.temp_max
													)}
													°c{" "}
													<small
														style={{
															color: "grey",
														}}
													>
														{Math.round(
															forecast.list[2]
																.main.temp_min
														)}
														°c
													</small>
												</div>{" "}
											</div>
											<div className="forecastColThree">
												<div>{tomorrowPlusThree()}</div>
												<img
													className="icon"
													src={icons[3]}
													alt=""
												></img>
												<div>
													{Math.round(
														forecast.list[3].main
															.temp_max
													)}
													°c{" "}
													<small
														style={{
															color: "grey",
														}}
													>
														{" "}
														{Math.round(
															forecast.list[3]
																.main.temp_max
														)}
														°c
													</small>
												</div>{" "}
											</div>
										</div>
									</>
								)}
							</>
						)}
					</main>
					<div className="footer">
						<p>&copy 2021 : Created By Daniel Murphy</p>
					</div>
				</div>
			)}
		</>
	);
}

export default App;

///write conditional for undefined i.e. sound africa
