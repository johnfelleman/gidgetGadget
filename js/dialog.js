angular.module('awardOptimizer', []).controller('criteriaController', function($scope) {
    $scope.toolMode = true;

    $scope.primaryRequirement = [
        {
            label: 'Construction or Architect/Engineering under FAR part 36',
            value: 1,
            awardOption: 'na'
        },
        {
            label: 'Product or supply',
            value: 2,
            awardOption: 'mas'
        },
        {
            label: 'Non-professional services, ie Service Contract Act',
            value: 3,
            awardOption: 'mas'
        },
        {
            label: 'Professional Services',
            value: 4,
            awardOption: 'equal'
        }
    ];


    $scope.primaryCriterion = $scope.primaryRequirement[1];

    $scope.secReqs = [
        {
            checked: false,
            value: 'NO',
            label: 'Includes non-commercial services or items',
            oasis: 'best',
            mas: 'ng'
        },
        {
            checked: false,
            value: 'NO',
            label: 'May include open market items',
            oasis: 'best',
            mas: 'possible'
        },
        {
            checked: false,
            value: 'NO',
            label: 'Contains or requires a cost reimbursement contract type',
            oasis: 'best',
            mas: 'ng'
        },
        {
            checked: true,
            value: 'NO',
            label: 'Includes hybrid contract types including cost-type',
            oasis: 'best',
            mas: 'ng'
        },
        {
            checked: false,
            value: 'NO',
            label: 'Professional Service which includes ancillary goods/services',
            oasis: 'best',
            mas: 'possible'
        },
        {
            checked: false,
            value: 'NO',
            label: 'Professional services on FFP with no anticipated open market items',
            oasis: 'possible',
            mas: 'best'
        }
    ];

    $scope.oasisScore = 0;
    $scope.masScore = 0;
    $scope.oasisInPlay = true;
    $scope.masInPlay = true;

    // this function recomputes the score for each solution and enables/disables buttons to avoid
    // impossible combos
    $scope.checkboxChanged = function() {
        console.log('click');
        $scope.oasisScore = 0;
        $scope.masScore = 0;

        angular.forEach($scope.secReqs, function(req, key, object) {
            if (req.value === 'YES' && req.mas === 'best') {
                $scope.masScore++;
            }
            if (req.value === 'YES' && req.oasis === 'best') {
                $scope.oasisScore++;
            }
            if (req.oasis === 'ng' && $scope.oasisInPlay === true) {
            }
            if (req.oasis === 'ng' && $scope.oasisInPlay === true) {
            }
        });
    };

});
