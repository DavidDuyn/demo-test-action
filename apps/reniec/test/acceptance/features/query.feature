Feature: Query

    Scenario: Invalid sip_authenticator
        Given I post to query with:
            | sip_authenticator | "123" |
            | sip_user          | "123" |
            | sip_document      | "123" |
        When Call to query "/reniec/query"
        Then the response status code should be "201"
        And the response should contain:
            | sip_des    | "Invalid authenticator" |
            | sip_params | null                    |
            | sip_rc     | -119                    |

    Scenario: Invalid document
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | "123"    |
            | sip_document      | "999"    |
        When Call to query "/reniec/query"
        Then the response status code should be "201"
        And the response should contain:
            | sip_des    | "Document provided is invalid"                                  |
            | sip_params | {"sip_authenticator": null, "sip_host": null, "sip_port": null} |
            | sip_rc     | 5114                                                            |

    Scenario: Invalid user
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | "888"    |
            | sip_document      | "123"    |
        When Call to query "/reniec/query"
        Then the response status code should be "201"
        And the response should contain:
            | sip_des    | "Invalid MQ response"                                           |
            | sip_params | {"sip_authenticator": null, "sip_host": null, "sip_port": null} |
            | sip_rc     | -120                                                            |

    Scenario: Get data query
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | "123"    |
            | sip_document      | "123"    |
        When Call to query "/reniec/query"
        Then the response status code should be "201"
        And the sip_rc should be "0"


    Scenario: Bad request - sip_authenticator should not be empty
        Given I post to query with:
            | sip_authenticator | ""    |
            | sip_user          | "123" |
            | sip_document      | "123" |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                                         |
            | message    | [ "sip_authenticator should not be empty" ] |
            | error      | "Bad Request"                               |

    Scenario: Bad request - sip_authenticator must be a string
        Given I post to query with:
            | sip_authenticator | 423432 |
            | sip_user          | "123"  |
            | sip_document      | "123"  |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                                      |
            | message    | [ "sip_authenticator must be a string" ] |
            | error      | "Bad Request"                            |

    Scenario: Bad request - sip_user should not be empty
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | ""       |
            | sip_document      | "123"    |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                                |
            | message    | [ "sip_user should not be empty" ] |
            | error      | "Bad Request"                      |

    Scenario: Bad request - sip_user must be a string
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | 52344    |
            | sip_document      | "123"    |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                             |
            | message    | [ "sip_user must be a string" ] |
            | error      | "Bad Request"                   |

    Scenario: Bad request - sip_document should not be empty
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | "123"    |
            | sip_document      | ""       |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                                    |
            | message    | [ "sip_document should not be empty" ] |
            | error      | "Bad Request"                          |

    Scenario: Bad request - sip_document must be a string
        Given I post to query with:
            | sip_authenticator | "123456" |
            | sip_user          | "123"    |
            | sip_document      | 52344    |
        When Call to query "/reniec/query"
        Then the response status code should be "400"
        And the response should contain:
            | statusCode | 400                                 |
            | message    | [ "sip_document must be a string" ] |
            | error      | "Bad Request"                       |