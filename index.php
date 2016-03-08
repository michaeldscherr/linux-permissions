<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Linux Permission &amp; Ownership Generator</title>
	<link rel="stylesheet" href="styles/main.min.css" />
</head>
<body>
	<header class="main-nav">
		<div class="main-nav__wrap">
			<ul class="main-nav__list">
				<li class="main-nav__item">
					<a class="main-nav__link" href="/">Home</a>
				</li>
				<li class="main-nav__item">
					<a class="main-nav__link" href="#permission">Permissions</a>
				</li>
				<li class="main-nav__item">
					<a class="main-nav__link" href="#ownership">Ownership</a>
				</li>
			</ul>
		</div>
	</header>
	<main>
		<div class="hero">
			<div class="hero__wrap">
				<input class="hero__input" type="number" name="owner" min="1" max="7" />
				<input class="hero__input" type="number" name="group" min="1" max="7" />
				<input class="hero__input" type="number" name="world" min="1" max="7" />
			</div>
		</div>
		<table class="legend">
			<thead class="legend__head">
				<th>Permission</th>
				<th>Owner</th>
				<th>Group</th>
				<th>World</th>
			</thead>
			<tbody class="legend_body">
				<tr>
					<td>Read (4)</td>
					<td>Write (2)</td>
					<td>Execute (1)</td>
				</tr>
				<tr>
					<td>
						<input type="checkbox" name="read_owner" />
					</td>
					<td>
						<input type="checkbox" name="read_group" />
					</td>
					<td>
						<input type="checkbox" name="read_world" />
					</td>
				</tr>
				<tr>
					<td>
						<input type="checkbox" name="write_owner" />
					</td>
					<td>
						<input type="checkbox" name="write_group" />
					</td>
					<td>
						<input type="checkbox" name="write_world" />
					</td>
				</tr>
				<tr>
					<td>
						<input type="checkbox" name="execute_owner" />
					</td>
					<td>
						<input type="checkbox" name="execute_group" />
					</td>
					<td>
						<input type="checkbox" name="execute_world" />
					</td>
				</tr>
			</tbody>
		</table>
	</main>
	<footer class="main-foot">
		@copy; <?= Date('Y'); ?> / <a class="main-foot__link" href="https://gitlab.com/michaeldscherr/linux-permissions#README">Michael Scherr</a>
	</footer>
	<script src="scripts/main.min.js"></script>
</body>
</html>
