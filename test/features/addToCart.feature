Feature: add to cart

    @addtocart
    Scenario: add product to cart
        Given user navigates to the mobile login screen
        When user enters valid mobile credentials
        Then user is redirected to the mobile product catalog
        When user tap the product
        And user tap add to cart button
        Then product should be added to cart is "1"
        