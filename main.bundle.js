webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-7 col-md-7 col-sm-12 col-xs-12\">\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"newComment\" class=\"hidden\">Add new comment</label>\n\t\t\t\t\t<input class=\"new-comment form-control\" type=\"text\" placeholder=\"Add a new comment\" id=\"newComment\">\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\t\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n\t\t\t<div class=\"panel-group\" id=\"versions\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t<!-- Current version -->\n\t\t\t\t<section class=\"version\">\n\t\t\t\t\t<div role=\"tab\" id=\"commentOne\" class=\"version-header\">\n\t\t\t\t\t\t<h3>Current version - 4 Comments</h3>\n\t\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#versions\" href=\"#collapseOne\" aria-expanded=\"true\"\n\t\t\t\t\t\t aria-controls=\"collapseOne\" *ngIf=\"commentsCollapsed\" (click)=\"toggleComments()\" title=\"Click to reveal the comments.\">\n\t\t\t\t\t\t\t<img src=\"../assets/icons/down-green.svg\" alt=\"arrow down\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#versions\" href=\"#collapseOne\" aria-expanded=\"true\"\n\t\t\t\t\t\t aria-controls=\"collapseOne\" *ngIf=\"!commentsCollapsed\" (click)=\"toggleComments()\" title=\"Click to hide the comments.\">\n\t\t\t\t\t\t\t<img src=\"../assets/icons/up-green.svg\" alt=\"arrow up\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"commentOne\">\n\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t<!--Comment 1 -->\n\t\t\t\t\t\t\t<div class=\"comment\">\n\t\t\t\t\t\t\t\t<header class=\"comment-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"comment-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user1.jpeg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Bennie Frank</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment.\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"hidden-xs\">Hide</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<div class=\"comment-body\">\n\t\t\t\t\t\t\t\t\t<p>Yoga is not just repetition of few postures – it is more about the exploration and discovery of the subtle\n\t\t\t\t\t\t\t\t\t\tenergies of life.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Responses -->\n\t\t\t\t\t\t\t\t<div class=\"panel-group\" id=\"responses\" role=\"tablist\" aria-multiselectable=\"true\">\n\t\t\t\t\t\t\t\t\t<div id=\"collapseResponses\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"collapseResponses\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"response\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"count\">1</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<header class=\"response-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"response-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user2.jpg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Elvis Press</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"response-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>A photographer gets people to pose for him. A yoga instructor gets people to pose for themselves.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"response\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"count\">2</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<header class=\"response-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"response-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user3.jpg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Barack Obama</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"response-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>The body is your temple. Keep it pure and clean for the soul to reside in.</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"response reply\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"count\">3</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<header class=\"response-header\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"response-info\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user4.jpg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Jane Doe (me)</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"reply\" class=\"hidden\">Reply to comment</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Reply to comment\" (focus)=\"focusInput()\" id=\"reply\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t (focusout)=\"focusInput()\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div role=\"tab\" class=\"controls\" [ngClass]=\"{'reply-mode': !responsesCollapsed && inputFocused}\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary replyBtn\" *ngIf=\"inputFocused\">Reply</button>\n\t\t\t\t\t\t\t\t\t\t<a role=\"button\" href=\"#\" *ngIf=\"responsesCollapsed\">Reply</a>\n\t\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#responses\" href=\"#collapseResponses\" aria-expanded=\"true\"\n\t\t\t\t\t\t\t\t\t\t aria-controls=\"collapseResponses\" *ngIf=\"responsesCollapsed\" (click)=\"toggleResponses()\" title=\"Toggle responses.\">\n\t\t\t\t\t\t\t\t\t\t\t3 Responses\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#responses\" href=\"#collapseResponses\" aria-expanded=\"true\"\n\t\t\t\t\t\t\t\t\t\t aria-controls=\"collapseResponses\" *ngIf=\"!responsesCollapsed\" (click)=\"toggleResponses()\" title=\"Toggle responses.\">\n\t\t\t\t\t\t\t\t\t\t\tShow Less\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Comment 2  -->\n\t\t\t\t\t\t\t<div class=\"comment\">\n\t\t\t\t\t\t\t\t<header class=\"comment-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"comment-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user5.jpeg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"username\">The Queen</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"hidden-xs\">Hide</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<div class=\"comment-body\">\n\t\t\t\t\t\t\t\t\t<p>Yoga is 99% practice and 1% theory.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Responses -->\n\t\t\t\t\t\t\t\t<div role=\"tab\" class=\"controls\">\n\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\">\n\t\t\t\t\t\t\t\t\t\t10 Responses\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Comment 3 -->\n\t\t\t\t\t\t\t<div class=\"comment\">\n\t\t\t\t\t\t\t\t<header class=\"comment-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"comment-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user2.jpg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Mary Moon</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"hidden-xs\">Hide</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<div class=\"comment-body-img pos-rel\">\n\t\t\t\t\t\t\t\t\t<div class=\"image-controls pos-abs\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"edit-image\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/edit-blue.svg\" class=\"maxHW\" alt=\"edit image\">\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button class=\"close-image\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/exit-blue.svg\" class=\"maxHW\" alt=\"close image\">\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<img class=\"comment-image\" src=\"../assets/images/cards.jpg\" alt=\"colored cards image\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"message comment-body\">\n\t\t\t\t\t\t\t\t\t<p>Please review the new design for the project.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Responses -->\n\t\t\t\t\t\t\t\t<div role=\"tab\" class=\"controls\">\n\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\">\n\t\t\t\t\t\t\t\t\t\t10 Responses\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- Comment 4 -->\n\t\t\t\t\t\t\t<div class=\"comment\">\n\t\t\t\t\t\t\t\t<header class=\"comment-header\">\n\t\t\t\t\t\t\t\t\t<div class=\"comment-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"avatar\">\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/avatars/user7.jpeg\" alt=\"user avatar\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<p class=\"username\">Angie Kis</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-time\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"date\">20 Dec 2018</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"time hidden-xs\">11:10 AM</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"hide-comment\" title=\"Click to hide the comment\">\n\t\t\t\t\t\t\t\t\t\t<img src=\"../assets/icons/eye-off-green.svg\" alt=\"hide comment icon\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"hidden-xs\">Hide</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</header>\n\t\t\t\t\t\t\t\t<div class=\"comment-body-video\">\n\t\t\t\t\t\t\t\t\t<div class=\"embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t\t\t\t<iframe class=\"embed-responsive-item\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/FSVTrUIvH8w\"\n\t\t\t\t\t\t\t\t\t\t frameborder=\"0\" gesture=\"media\" allow=\"encrypted-media\" allowfullscreen>\n\t\t\t\t\t\t\t\t\t\t</iframe>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"message comment-body\">\n\t\t\t\t\t\t\t\t\t<p>Please review the new video.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Responses -->\n\t\t\t\t\t\t\t\t<div role=\"tab\" class=\"controls\">\n\t\t\t\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\">\n\t\t\t\t\t\t\t\t\t\t10 Responses\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</section>\n\t\t\t\t<!--Version 2 -->\n\t\t\t\t<section class=\"version\">\n\t\t\t\t\t<div role=\"tab\" id=\"commentTwo\" class=\"version-header\">\n\t\t\t\t\t\t<h3>Version 2 - 3 Comments</h3>\n\t\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#versions\" href=\"#collapseTwo\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t<img src=\"../assets/icons/down-green.svg\" alt=\"arrow down\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t\t<!--Version 3 -->\n\t\t\t\t<section class=\"version\">\n\t\t\t\t\t<div role=\"tab\" id=\"commentThree\" class=\"version-header\">\n\t\t\t\t\t\t<h3>Version 3 - 10 Comments</h3>\n\t\t\t\t\t\t<div class=\"line\"></div>\n\t\t\t\t\t\t<a role=\"button\" data-toggle=\"collapse\" data-parent=\"#versions\" href=\"#collapseThree\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t<img src=\"../assets/icons/down-green.svg\" alt=\"arrow down\">\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</div>\n\t\t\t\t</section>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</main>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".pos-rel {\n  position: relative; }\n\n.pos-abs {\n  position: absolute; }\n\n.maxHW {\n  max-height: 100%;\n  max-width: 100%; }\n\n.username {\n  margin: 0;\n  margin: 0 10px;\n  color: #5A6872;\n  font-size: 15px;\n  font-weight: 500; }\n\nheader, .version-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.date-time {\n  color: #69767F;\n  font-size: 15px;\n  font-weight: 400; }\n\n.comment-header, .response-header {\n  margin-bottom: 10px; }\n\n.comment-body, .comment-body-img, .comment-body-video, .response-body {\n  color: #596873;\n  border: 1px solid #B7C1CA;\n  background-color: #fff; }\n\n.messaget p, .new-comment {\n  color: #84929B; }\n\n.new-comment {\n  height: 46px;\n  padding-left: 10px;\n  margin-top: 40px; }\n\n.version {\n  padding: 15px 0; }\n\n.version .version-header h3 {\n    margin: 0;\n    color: #3E6FB2;\n    font-size: 18px;\n    font-weight: 500; }\n\n.version .version-header .line {\n    border: 1px solid #D5DFE5;\n    height: 1px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 20px; }\n\n.version .panel-body {\n    padding: 15px 0 0 0; }\n\n.version .panel-body .comment .comment-header .comment-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.version .panel-body .comment .comment-header .comment-info .avatar {\n      height: 32px;\n      width: 32px;\n      border-radius: 50%;\n      overflow: hidden;\n      border: 2px solid #C7CFD6; }\n\n.version .panel-body .comment .comment-header .comment-info .avatar img {\n        max-width: 100%; }\n\n.version .panel-body .comment .comment-header .hide-comment {\n    cursor: pointer;\n    color: #1A8384; }\n\n.version .panel-body .comment .comment-header .hide-comment span {\n      font-size: 14px;\n      font-weight: 500; }\n\n.version .panel-body .comment .comment-body {\n    border-radius: 3px; }\n\n.version .panel-body .comment .comment-body p {\n      margin: 14px;\n      font-size: 15px; }\n\n.version .panel-body .comment .panel-group {\n    margin: 0; }\n\n.version .panel-body .comment .comment-body-img .image-controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    position: absolute;\n    width: 100%;\n    top: 15px;\n    right: 15px; }\n\n.version .panel-body .comment .comment-body-img .image-controls button {\n      width: 20px;\n      height: 20px;\n      border: 1px solid #C7CFD6;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      border-radius: 2px;\n      background: #fff;\n      margin-right: 10px;\n      padding: 3px; }\n\n.version .panel-body .comment .comment-body-img .comment-image {\n    width: 100%; }\n\n.version .panel-body .comment .message {\n    margin-top: 10px; }\n\n.version .panel-body .comment .response {\n    position: relative;\n    margin-left: 10px;\n    padding: 0 0 20px 20px;\n    border-left: 1px dashed #C7CFD6; }\n\n.version .panel-body .comment .response.reply {\n      border: none;\n      padding-left: 15px;\n      padding-bottom: 0; }\n\n.version .panel-body .comment .response .count {\n      position: absolute;\n      top: 0;\n      left: -11px;\n      width: 22px;\n      height: 22px;\n      background-color: #fff;\n      color: #5A6872;\n      border-radius: 50%;\n      border: 1px solid #C7CFD6;\n      text-align: center; }\n\n.version .panel-body .comment .response .response-header .response-info {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.version .panel-body .comment .response .response-header .response-info .avatar {\n        height: 20px;\n        width: 20px;\n        overflow: hidden;\n        border-radius: 50%;\n        border: 1px solid #C7CFD6; }\n\n.version .panel-body .comment .response .response-header .response-info .avatar img {\n          max-width: 100%; }\n\n.version .panel-body .comment .response .response-body {\n      border-radius: 3px; }\n\n.version .panel-body .comment .response .response-body p {\n        margin: 14px;\n        font-size: 15px; }\n\n.version .panel-body .comment .response.reply input {\n      width: 100%;\n      padding: 10px;\n      border: 1px solid #B7C1CA;\n      color: #84929B;\n      height: 50px; }\n\n.version .panel-body .comment .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-left: 25px;\n    padding: 0 0 20px 0px; }\n\n.version .panel-body .comment .controls .replyBtn {\n      background-color: #1A8384;\n      width: 82px;\n      height: 32px;\n      line-height: 18px; }\n\n.version .panel-body .comment .controls a {\n      text-decoration: none;\n      color: #1A8384;\n      margin-left: 10px;\n      padding: 6px 0;\n      font-size: 14px;\n      font-weight: 500;\n      cursor: pointer; }\n\n.version .panel-body .comment .controls a:hover {\n        color: #1A8384; }\n\n.version .panel-body .comment .controls.reply-mode {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n\n/* Medium Devices, Desktops */\n\n@media only screen and (min-width: 992px) {\n  .container-fluid {\n    padding-left: 50px; } }\n\n/* Small Devices, Tablets */\n\n@media only screen and (max-width: 768px) {\n  .username {\n    font-size: 14px; }\n  .date-time {\n    font-size: 14px; }\n  .version .version-header h3 {\n    font-size: 15px; }\n  .version .panel-body .comment-body-img, .version .panel-body .comment-body-video {\n    margin: 0 -15px; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.responsesCollapsed = true;
        this.commentsCollapsed = false;
        this.inputFocused = false;
    }
    AppComponent.prototype.toggleResponses = function () {
        this.responsesCollapsed = !this.responsesCollapsed;
    };
    AppComponent.prototype.toggleComments = function () {
        this.commentsCollapsed = !this.commentsCollapsed;
    };
    AppComponent.prototype.focusInput = function () {
        this.inputFocused = !this.inputFocused;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map