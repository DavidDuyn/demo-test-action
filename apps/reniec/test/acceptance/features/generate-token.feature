Feature: GenerateToken

    Scenario: Generate Token Unauthorized
        Given I post to connect with:
            | sip_k1 | "123" |
        When Call to connect "/reniec/connect"
        Then the response status code should be "201"
        And the response should contain:
            | sip_error  | "Not Authorized" |
            | sip_id     | 50               |
            | sip_params | null             |
            | sip_rc     | 401              |

    Scenario: Generate Token Authorized
        Given I post to connect with:
            | sip_k1 | "1234" |
        When Call to connect "/reniec/connect"
        Then the response status code should be "201"
        And the sip_rc should be "0"
        And the response should contain:
            | sip_error  | "Ok"                                                          |
            | sip_id     | 50                                                            |
            | sip_params | {"sip_authenticator": "159914705............", "sip_tpk": ""} |
            | sip_rc     | 0                                                             |

    Scenario: Bad request - sip_k1 should not be empty
        Given I post to connect with:
            | sip_k1 | "" |
        When Call to connect "/reniec/connect"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                              |
            | message    | [ "sip_k1 should not be empty" ] |
            | error      | "Bad Request"                    |

    Scenario: Bad request - sip_k1 must be a string
        Given I post to connect with:
            | sip_k1 | 3434 |
        When Call to connect "/reniec/connect"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                           |
            | message    | [ "sip_k1 must be a string" ] |
            | error      | "Bad Request"                 |