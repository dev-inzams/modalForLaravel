It is very easy to use
In Laravel's public folder, keep the css file in css and the javascript file in js, just link up the master layout file and then open and close the model by calling these two javascript functions.

<h2>Function Exaple</h2>
<code>
  <button onclick="openModal()"></button>
</code>


<h2>This is the Full Html Template</h2>
<code>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="modal.css">
    <title>Custom Modal</title>
</head>
<body>

<button onclick="openModal()">Open Modal</button>

<div class="modal" id="customModal">
    <div class="modal-content">
        <span class="close-btn" onclick="closeModal()">&times;</span>
        <h2>Modal Title</h2>
        <div class="main-content">
            <p>Youtube: <strong>Developer Inzams</strong></p>
            <p>Facebook: <strong>Developer Inzams</strong></p>
        </div>
    </div>
</div>


<script src="modal.js"></script>
</body>
</html>
</code>
