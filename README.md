# Nav-Login-Status

## Usage

include `navLoginStatus.bundle.js` in your airship project:

```
<body>
	<script src="/assets/scripts/navLoginStatus.bundle.js"></script>
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
yarn install
```

start dev server

```
yarn run dev
```

this serves `src/` on `localhost:9000`

## Build

```
yarn build
```

necessary files will build into `dist/`