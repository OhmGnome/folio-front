export const autoForm = 
`app.directive('autoForm', function($rootScope) {
	return {
		templateUrl : './autoForm.html',
		restrict : 'A',
		scope : {
			obj : '=',
			property : '='
		},
	}
});`

export const autoFormHTML =
`<div class="form-group">
	<label for="{{property}}" class="col-md-3">{{property}}: </label>
	<div class="col-md-7">
		<input class="form-control" type="text" id="{{property}}" name="{{property}}" 
		ng-model="obj[property]" maxlength="50"/>
	</div>
</div>

<div auto-form obj="user" property="key" ng-repeat="key in userKeys"
	ng-if="typeof user[key] === 'string' && key !== '$$hashKey'"></div>`