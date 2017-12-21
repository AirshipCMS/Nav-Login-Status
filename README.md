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

note that the element's `id` should be `nav-login-status`.

create an instance of NavLoginStatus with the airshipcms domain:

```
new NavLoginStatus('domain.airshipcms.io');
```

## Development

install dependencies

```
yarn
```

start dev server

```
yarn dev
```

this serves `src/` on `localhost:8080`

## Build for Dist

```
yarn build
```

javascript and css will be compiled into `dist/`
