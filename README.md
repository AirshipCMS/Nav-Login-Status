# Nav-Login-Status

## Usage

include `navLoginStatus.js` and `navLoginStatus.css` in your airship project:

```
<head>
	<link rel="stylesheet" type="text/css" href="/assets/styles/navLoginStatus.css">
</head>
<body>
	<script src="/assets/scripts/navLoginStatus.js"></script>
</body>
```

add the element container:

```
<div id="nav-login-status"></div>
```

note that the element's `id` but be `nav-login-status`.

create an instance of NavLoginStatus with the airshipcms domain:

```
new NavLoginStatus('domain.airshipcms.io');
```

## Development

install dependencies

```
yarn install
```

start dev server

```
gulp
```

this serves `src/` on `localhost:8080`

## Build

```
gulp build
```

necessary files will build into `dist/`