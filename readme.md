# Cryptocurrency Tracker
A cross platform cryptocurrency tracker application that cryptocurrency investors can use to keep track of real-time prices of popular coins and crypto markets.

Built with React Native, using the [CoinGecko API](https://www.coingecko.com/en/api).


<img width="200" src="https://pfteza-etc.s3-us-west-2.amazonaws.com/cryptotracker-1.gif"/> 
<img width="200" src="https://pfteza-etc.s3-us-west-2.amazonaws.com/cryptotracker-2.gif"/>
<img width="200" src="https://pfteza-etc.s3-us-west-2.amazonaws.com/cryptotracker-3.gif"/>


### Features
1. Searchable real-time data feed of supported cryptocurrency markets that display the cryptocurrency's ticker, name, current price ($USD), and 24hour price movement.
2. "Market-movers" screen that displays the top 10 gainers and losers from a 24hour time period.
3. A detailed cryptocurrency-info screen that features a 7day sparkline, 24h hi/lo, and information about the cryptocurrency.

### Sparkline - Solution Case Study
Each cryptocurrency detail page features an SVG-based sparkline graph that represents the hourly price movement of a cryptocurrency over 168 hours (7 days).

<img src="https://pfteza-etc.s3-us-west-2.amazonaws.com/cryptotracker-sparkline.png" width="50%" />
&nbsp;

**The Challenge: Sparkline**
Finding a solution to display a sparkline was a unique challenge. After discovering that sparkline data was available in the api as an array of numbers ie. `[506789.82, 47189.21, 53987.56 ...]`, I came to the conclusion that the best way to dynamically render a sparkline for each cryptocurrency was to use an SVG path.

**The Solution: Sparkline**
After closely inspecting the markup of a regular SVG, I discovered the syntax for a `<path>` element contained X and Y coordinates.

Example:
```
<path d="M 4 28.26 L 4 28.26 L ...
```
```
<path d="M {x} {y} L {x} {y} L...
```
From the example above, the first point in the path would have an X Coordinate of 4, and a Y coordinate of 28.26. This means that if I could somehow transform the array of numbers from the sparkline data into coordinates, I could make an accurate SVG path.

**The Implementation: Plotting the X Axis Coordinates**
Plotting the X Axis coordinates was the easy part. The challenge here was averaging-out the points from the sparkline array length-wise to the screen. My solution to plot the X axis included querying the screen width of the device, and dividing the width by the data points I had. In this case it was 168.

src/components/controllers/Sparkline/SparklineCtrl.js
```
  const processX = ( array ) => {
    if(!mounted) return null
    if(!array || array.length < 1) return []
    let intArray = array.map((int) => +int),
        increment = ScreenWidth / intArray.length,
        counter = 0,
        xCoordinates = [];
    
    intArray.forEach(() => {
      xCoordinates = [...xCoordinates, counter]
      counter += increment
    })
    return xCoordinates
  }

```
Result:
`[0, 2.8392857142857144, 5.678571428571429, 8.517857…]`


---

**The Implementation: Plotting the Y Axis Coordinates**
Plotting the Y Axis coordinates was a little more challenging. The data varied greatly across cryptocurrencies, and we needed the sparkline graphic to have the same height across cryptocurrencies. The solution called for a *Linear Conversion* where I mapped the price movement of a currency to a 100px-high SVG.

src/components/controllers/Sparkline/SparklineCtrl.js
```
  const processY = ( array ) => {
    if(!array || array.length < 1) return []

    let intArray = array.map((int) => +int)
    let oMax = Math.max.apply(Math, intArray),
        oMin = Math.min.apply(Math, intArray),
        nMax = 100,
        nMin = 0,
        oRange = (oMax - oMin),
        nRange = (nMax - nMin);

    const yCoordinates = intArray.map((int) => {
      let nValue = (((+int - oMin)* nRange/oRange) + nMin)
      return nValue
    })
    return yCoordinates
  }
```
Result:
`[9.186710133928345, 8.764548421290856, 11.521401450…]`

**The Implementation: Finishing Up**
With the X and Y coordinates processed, all I needed to do was to merge the arrays and format the coordinates into a string that the `<path>` element could accept.

Result:
```
"M 0 , 9.186710133928345 L 2.8392857142857144 , 8.764548421290856...
```

