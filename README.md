<html>
<head>
    <title>lämpötilamuunnin</title>
</head>
<body>
    <h2>lämpötilamuunnin</h2>

    <form id="lämpötila">
        <select id="muunnos" name="lämpötilamuunnin">
            <option value="f-c">fahrenheit -> celcius</option>
            <option value="c-f">celcius -> fahrenheit</option>
            <option value="c-k">celcius -> kelvin</option>
            <option value="k-c">kelvin -> celcius</option>
            <option value="f-k">fahrenheit -> kelvin</option>
            <option value="k-f">kelvin -> fahrenheit</option>
          </select>
          <br>
        <input type="text" id="lampotila-input" placeholder="Syötä lämpötila">
        <button type="button" onclick="muunnaLampotila()">Muunna</button>
        <div id="result"></div>
        <div>
        <input type="radio" id="1" name="desimaali" value="1" checked>
        <label for="html">1 desimaali</label><br>
        <input type="radio" id="2" name="desimaali" value="2">
        <label for="css">2 desimaali</label><br>
        <input type="radio" id="3" name="desimaali" value="3">
        <label for="javascript">3 desimaali</label>
        <div id="error-message" style="color: red;"></div>
        </div>
    </form>
        <script src="./lampotilamuunnin.js"></script>

</body>
</html>
