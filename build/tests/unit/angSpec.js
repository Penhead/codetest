describe("Tests for Contacts App",function() {
    beforeEach(module("app"));
    describe("Testing Contacts Controller", function () {
        var scope = {},
            ctrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ctrl = $controller("ContactsController", {$scope: scope});
        }));
        it("should have contactList Defined", function(){
            expect(scope.contactList).toBeDefined();
        });
        it("should have collapse to equal false", function(){
            expect(scope.collapse).toEqual(false);
        });
        it("should add new contact to list", function(){
            var testObj = { 
                type: "Daily", 
                name: "Jane Doe", 
                title: "VP", 
                phone: "(555) 867-5309", 
                ext: "", 
                fax: "(555) 867-5309",
                email: "other" 
            };
            scope.addContact(testObj);
            console.log(scope.contactList);
            expect(scope.contactList).toContain(testObj);
        });
        it("should be a new length after removing contacts from list", function(){
            var contactLength = scope.contactList.length;
            scope.itemsToDelete = [1]; 
            var diff = (contactLength - scope.itemsToDelete.length);
            scope.deleteContact();
            expect(scope.contactList.length).toEqual(diff);
        });
    });
});