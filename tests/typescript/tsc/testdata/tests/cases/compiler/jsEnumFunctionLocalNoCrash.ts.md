__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineCommonExtensionSymbols",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 37
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "apiPrivate",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "apiPrivate",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 92
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Events",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 82,
                "end": 99
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ButtonClicked",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 110,
                      "end": 123
                    },
                    "value": {
                      "type": "Literal",
                      "value": "button-clicked-",
                      "raw": "'button-clicked-'",
                      "start": 125,
                      "end": 142
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 110,
                    "end": 142
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PanelObjectSelected",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 169
                    },
                    "value": {
                      "type": "Literal",
                      "value": "panel-objectSelected-",
                      "raw": "'panel-objectSelected-'",
                      "start": 171,
                      "end": 194
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 150,
                    "end": 194
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NetworkRequestFinished",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 224
                    },
                    "value": {
                      "type": "Literal",
                      "value": "network-request-finished",
                      "raw": "'network-request-finished'",
                      "start": 226,
                      "end": 252
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 202,
                    "end": 252
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "OpenResource",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 272
                    },
                    "value": {
                      "type": "Literal",
                      "value": "open-resource",
                      "raw": "'open-resource'",
                      "start": 274,
                      "end": 289
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 260,
                    "end": 289
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "PanelSearch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 308
                    },
                    "value": {
                      "type": "Literal",
                      "value": "panel-search-",
                      "raw": "'panel-search-'",
                      "start": 310,
                      "end": 325
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 297,
                    "end": 325
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecordingStarted",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 349
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trace-recording-started-",
                      "raw": "'trace-recording-started-'",
                      "start": 351,
                      "end": 377
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 333,
                    "end": 377
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RecordingStopped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 401
                    },
                    "value": {
                      "type": "Literal",
                      "value": "trace-recording-stopped-",
                      "raw": "'trace-recording-stopped-'",
                      "start": 403,
                      "end": 429
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 385,
                    "end": 429
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResourceAdded",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 450
                    },
                    "value": {
                      "type": "Literal",
                      "value": "resource-added",
                      "raw": "'resource-added'",
                      "start": 452,
                      "end": 468
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 437,
                    "end": 468
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResourceContentCommitted",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 500
                    },
                    "value": {
                      "type": "Literal",
                      "value": "resource-content-committed",
                      "raw": "'resource-content-committed'",
                      "start": 502,
                      "end": 530
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 476,
                    "end": 530
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ViewShown",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 547
                    },
                    "value": {
                      "type": "Literal",
                      "value": "view-shown-",
                      "raw": "'view-shown-'",
                      "start": 549,
                      "end": 562
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 538,
                    "end": 562
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ViewHidden",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 570,
                      "end": 580
                    },
                    "value": {
                      "type": "Literal",
                      "value": "view-hidden-",
                      "raw": "'view-hidden-'",
                      "start": 582,
                      "end": 596
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 570,
                    "end": 596
                  }
                ],
                "start": 102,
                "end": 602
              },
              "start": 82,
              "end": 602
            },
            "directive": null,
            "start": 82,
            "end": 603
          }
        ],
        "start": 50,
        "end": 605
      },
      "expression": false,
      "start": 0,
      "end": 605
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 605
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "defineCommonExtensionSymbols",
    "start": 9,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "apiPrivate",
    "start": 38,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "apiPrivate",
    "start": 82,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Events",
    "start": 93,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "ButtonClicked",
    "start": 110,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "'button-clicked-'",
    "start": 125,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "PanelObjectSelected",
    "start": 150,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "'panel-objectSelected-'",
    "start": 171,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "NetworkRequestFinished",
    "start": 202,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "String",
    "value": "'network-request-finished'",
    "start": 226,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253
  },
  {
    "type": "Identifier",
    "value": "OpenResource",
    "start": 260,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "String",
    "value": "'open-resource'",
    "start": 274,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "PanelSearch",
    "start": 297,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "String",
    "value": "'panel-search-'",
    "start": 310,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "RecordingStarted",
    "start": 333,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350
  },
  {
    "type": "String",
    "value": "'trace-recording-started-'",
    "start": 351,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 377,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "RecordingStopped",
    "start": 385,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "'trace-recording-stopped-'",
    "start": 403,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "ResourceAdded",
    "start": 437,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 450,
    "end": 451
  },
  {
    "type": "String",
    "value": "'resource-added'",
    "start": 452,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "ResourceContentCommitted",
    "start": 476,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 500,
    "end": 501
  },
  {
    "type": "String",
    "value": "'resource-content-committed'",
    "start": 502,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "ViewShown",
    "start": 538,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "'view-shown-'",
    "start": 549,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "ViewHidden",
    "start": 570,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 580,
    "end": 581
  },
  {
    "type": "String",
    "value": "'view-hidden-'",
    "start": 582,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 604,
    "end": 605
  }
]
```
