__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iconProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 41
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testBool",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 77
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 80,
                        "end": 87
                      },
                      "start": 78,
                      "end": 87
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 69,
                    "end": 88
                  }
                ],
                "start": 59,
                "end": 94
              },
              "start": 57,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 94
          }
        ],
        "start": 17,
        "end": 96
      },
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "INestedProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 120
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 147
                },
                "typeArguments": null,
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 148
          }
        ],
        "start": 121,
        "end": 150
      },
      "declare": false,
      "start": 98,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 214
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                ],
                "start": 208,
                "end": 223
              },
              "start": 206,
              "end": 223
            },
            "start": 200,
            "end": 223
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "INVALID_PROP_NAME",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 245
                },
                "value": {
                  "type": "Literal",
                  "value": "share",
                  "raw": "'share'",
                  "start": 247,
                  "end": 254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 264
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 266,
                  "end": 272
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 256,
                "end": 272
              }
            ],
            "start": 226,
            "end": 274
          },
          "definite": false,
          "start": 200,
          "end": 274
        }
      ],
      "declare": false,
      "start": 194,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 360
                    },
                    "typeArguments": null,
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 363,
                    "end": 369
                  }
                ],
                "start": 354,
                "end": 369
              },
              "start": 352,
              "end": 369
            },
            "start": 346,
            "end": 369
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 384
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asdfasdf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 396
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 398,
                        "end": 404
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 388,
                      "end": 404
                    }
                  ],
                  "start": 386,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 374,
                "end": 406
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 418,
                  "end": 424
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 408,
                "end": 424
              }
            ],
            "start": 372,
            "end": 426
          },
          "definite": false,
          "start": 346,
          "end": 426
        }
      ],
      "declare": false,
      "start": 340,
      "end": 427
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "INestedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 508
                    },
                    "typeArguments": null,
                    "start": 496,
                    "end": 508
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 511,
                    "end": 517
                  }
                ],
                "start": 496,
                "end": 517
              },
              "start": 494,
              "end": 517
            },
            "start": 488,
            "end": 517
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 533
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "INVALID_PROP_NAME",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 537,
                        "end": 554
                      },
                      "value": {
                        "type": "Literal",
                        "value": "share",
                        "raw": "'share'",
                        "start": 556,
                        "end": 563
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 537,
                      "end": 563
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iconProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 573
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 575,
                        "end": 581
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 565,
                      "end": 581
                    }
                  ],
                  "start": 535,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 522,
                "end": 583
              }
            ],
            "start": 520,
            "end": 585
          },
          "definite": false,
          "start": 488,
          "end": 585
        }
      ],
      "declare": false,
      "start": 482,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 10,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "iconProp",
    "start": 23,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 34,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 46,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "testBool",
    "start": 69,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 80,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 98,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "INestedProps",
    "start": 108,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "nestedProps",
    "start": 127,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 194,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "propB1",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 217,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "INVALID_PROP_NAME",
    "start": 228,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "String",
    "value": "'share'",
    "start": 247,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "iconProp",
    "start": 256,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 340,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "propB2",
    "start": 346,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "IProps",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "nestedProp",
    "start": 374,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "asdfasdf",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 398,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "iconProp",
    "start": 408,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 418,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "propA1",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "INestedProps",
    "start": 496,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "nestedProps",
    "start": 522,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "INVALID_PROP_NAME",
    "start": 537,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555
  },
  {
    "type": "String",
    "value": "'share'",
    "start": 556,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "iconProp",
    "start": 565,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574
  },
  {
    "type": "String",
    "value": "'test'",
    "start": 575,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586
  }
]
```
