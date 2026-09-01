__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 21
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 42
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 43,
              "end": 46
            },
            "declare": false,
            "start": 25,
            "end": 46
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IntrinsicElements",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 75
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 80,
                    "end": 85
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Attribs1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 95
                      },
                      "typeArguments": null,
                      "start": 87,
                      "end": 95
                    },
                    "start": 85,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 80,
                  "end": 96
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 99,
                    "end": 104
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reqd",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 108,
                            "end": 112
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 114,
                              "end": 120
                            },
                            "start": 112,
                            "end": 120
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 108,
                          "end": 120
                        }
                      ],
                      "start": 106,
                      "end": 122
                    },
                    "start": 104,
                    "end": 122
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 99,
                  "end": 123
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "var",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 129
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "var",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 133,
                            "end": 136
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 138,
                              "end": 144
                            },
                            "start": 136,
                            "end": 144
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 133,
                          "end": 144
                        }
                      ],
                      "start": 131,
                      "end": 146
                    },
                    "start": 129,
                    "end": 146
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 126,
                  "end": 147
                }
              ],
              "start": 76,
              "end": 150
            },
            "declare": false,
            "start": 48,
            "end": 150
          }
        ],
        "start": 22,
        "end": 152
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 152
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Attribs1",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 171
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
              },
              "start": 177,
              "end": 185
            },
            "accessibility": null,
            "static": false,
            "start": 175,
            "end": 186
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 192,
                "end": 198
              },
              "start": 190,
              "end": 198
            },
            "accessibility": null,
            "static": false,
            "start": 188,
            "end": 199
          }
        ],
        "start": 172,
        "end": 201
      },
      "declare": false,
      "start": 153,
      "end": 201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 210,
            "end": 215
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 216,
                "end": 217
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 219,
                  "end": 220
                },
                "start": 218,
                "end": 221
              },
              "start": 216,
              "end": 221
            }
          ],
          "selfClosing": true,
          "start": 209,
          "end": 224
        },
        "children": [],
        "closingElement": null,
        "start": 209,
        "end": 224
      },
      "directive": null,
      "start": 209,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 233,
            "end": 238
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 232,
          "end": 241
        },
        "children": [],
        "closingElement": null,
        "start": 232,
        "end": 241
      },
      "directive": null,
      "start": 232,
      "end": 242
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 250,
            "end": 255
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "data-x",
                "start": 256,
                "end": 262
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 264,
                  "end": 268
                },
                "start": 263,
                "end": 269
              },
              "start": 256,
              "end": 269
            }
          ],
          "selfClosing": true,
          "start": 249,
          "end": 272
        },
        "children": [],
        "closingElement": null,
        "start": 249,
        "end": 272
      },
      "directive": null,
      "start": 249,
      "end": 273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 282,
            "end": 287
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 288,
                "end": 292
              },
              "value": {
                "type": "Literal",
                "value": "true",
                "raw": "'true'",
                "start": 293,
                "end": 299
              },
              "start": 288,
              "end": 299
            }
          ],
          "selfClosing": true,
          "start": 281,
          "end": 302
        },
        "children": [],
        "closingElement": null,
        "start": 281,
        "end": 302
      },
      "directive": null,
      "start": 281,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 311,
            "end": 316
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 317,
                "end": 321
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "true",
                  "raw": "'true'",
                  "start": 323,
                  "end": 329
                },
                "start": 322,
                "end": 330
              },
              "start": 317,
              "end": 330
            }
          ],
          "selfClosing": true,
          "start": 310,
          "end": 333
        },
        "children": [],
        "closingElement": null,
        "start": 310,
        "end": 333
      },
      "directive": null,
      "start": 310,
      "end": 334
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 353,
            "end": 358
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 359,
                "end": 360
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 362,
                  "end": 365
                },
                "start": 361,
                "end": 366
              },
              "start": 359,
              "end": 366
            }
          ],
          "selfClosing": true,
          "start": 352,
          "end": 369
        },
        "children": [],
        "closingElement": null,
        "start": 352,
        "end": 369
      },
      "directive": null,
      "start": 352,
      "end": 370
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 400,
            "end": 405
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 406,
                "end": 407
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 409,
                  "end": 410
                },
                "start": 408,
                "end": 411
              },
              "start": 406,
              "end": 411
            }
          ],
          "selfClosing": true,
          "start": 399,
          "end": 414
        },
        "children": [],
        "closingElement": null,
        "start": 399,
        "end": 414
      },
      "directive": null,
      "start": 399,
      "end": 415
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 443,
            "end": 448
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "y",
                "start": 449,
                "end": 450
              },
              "value": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 451,
                "end": 456
              },
              "start": 449,
              "end": 456
            }
          ],
          "selfClosing": true,
          "start": 442,
          "end": 459
        },
        "children": [],
        "closingElement": null,
        "start": 442,
        "end": 459
      },
      "directive": null,
      "start": 442,
      "end": 460
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 488,
            "end": 493
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "x",
                "start": 494,
                "end": 495
              },
              "value": {
                "type": "Literal",
                "value": "32",
                "raw": "\"32\"",
                "start": 496,
                "end": 500
              },
              "start": 494,
              "end": 500
            }
          ],
          "selfClosing": true,
          "start": 487,
          "end": 503
        },
        "children": [],
        "closingElement": null,
        "start": 487,
        "end": 503
      },
      "directive": null,
      "start": 487,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test1",
            "start": 535,
            "end": 540
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 541,
                "end": 544
              },
              "value": {
                "type": "Literal",
                "value": "10",
                "raw": "\"10\"",
                "start": 545,
                "end": 549
              },
              "start": 541,
              "end": 549
            }
          ],
          "selfClosing": true,
          "start": 534,
          "end": 552
        },
        "children": [],
        "closingElement": null,
        "start": 534,
        "end": 552
      },
      "directive": null,
      "start": 534,
      "end": 553
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 584,
            "end": 589
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": true,
          "start": 583,
          "end": 592
        },
        "children": [],
        "closingElement": null,
        "start": 583,
        "end": 592
      },
      "directive": null,
      "start": 583,
      "end": 593
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "test2",
            "start": 618,
            "end": 623
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "reqd",
                "start": 624,
                "end": 628
              },
              "value": {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 630,
                  "end": 632
                },
                "start": 629,
                "end": 633
              },
              "start": 624,
              "end": 633
            }
          ],
          "selfClosing": true,
          "start": 617,
          "end": 636
        },
        "children": [],
        "closingElement": null,
        "start": 617,
        "end": 636
      },
      "directive": null,
      "start": 617,
      "end": 637
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "var",
            "start": 685,
            "end": 688
          },
          "typeArguments": null,
          "attributes": [
            {
              "type": "JSXAttribute",
              "name": {
                "type": "JSXIdentifier",
                "name": "var",
                "start": 689,
                "end": 692
              },
              "value": {
                "type": "Literal",
                "value": "var",
                "raw": "'var'",
                "start": 693,
                "end": 698
              },
              "start": 689,
              "end": 698
            }
          ],
          "selfClosing": true,
          "start": 684,
          "end": 701
        },
        "children": [],
        "closingElement": null,
        "start": 684,
        "end": 701
      },
      "directive": null,
      "start": 684,
      "end": 702
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 702
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 25,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 35,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 48,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 58,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 87,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 99,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "reqd",
    "start": 108,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "var",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 138,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 153,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Attribs1",
    "start": 163,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 209,
    "end": 210
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 210,
    "end": 215
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 232,
    "end": 233
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 233,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 250,
    "end": 255
  },
  {
    "type": "JSXIdentifier",
    "value": "data-x",
    "start": 256,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 264,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 281,
    "end": 282
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 282,
    "end": 287
  },
  {
    "type": "JSXIdentifier",
    "value": "reqd",
    "start": 288,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 292,
    "end": 293
  },
  {
    "type": "JSXText",
    "value": "'true'",
    "start": 293,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 311,
    "end": 316
  },
  {
    "type": "JSXIdentifier",
    "value": "reqd",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 322,
    "end": 323
  },
  {
    "type": "String",
    "value": "'true'",
    "start": 323,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 352,
    "end": 353
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 353,
    "end": 358
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 361,
    "end": 362
  },
  {
    "type": "String",
    "value": "'0'",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 400,
    "end": 405
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 406,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 442,
    "end": 443
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 443,
    "end": 448
  },
  {
    "type": "JSXIdentifier",
    "value": "y",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 450,
    "end": 451
  },
  {
    "type": "JSXText",
    "value": "\"foo\"",
    "start": 451,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 487,
    "end": 488
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 488,
    "end": 493
  },
  {
    "type": "JSXIdentifier",
    "value": "x",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 495,
    "end": 496
  },
  {
    "type": "JSXText",
    "value": "\"32\"",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 534,
    "end": 535
  },
  {
    "type": "JSXIdentifier",
    "value": "test1",
    "start": 535,
    "end": 540
  },
  {
    "type": "JSXIdentifier",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 544,
    "end": 545
  },
  {
    "type": "JSXText",
    "value": "\"10\"",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 583,
    "end": 584
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 584,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 591,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 617,
    "end": 618
  },
  {
    "type": "JSXIdentifier",
    "value": "test2",
    "start": 618,
    "end": 623
  },
  {
    "type": "JSXIdentifier",
    "value": "reqd",
    "start": 624,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 629,
    "end": 630
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 630,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 634,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 684,
    "end": 685
  },
  {
    "type": "JSXIdentifier",
    "value": "var",
    "start": 685,
    "end": 688
  },
  {
    "type": "JSXIdentifier",
    "value": "var",
    "start": 689,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 692,
    "end": 693
  },
  {
    "type": "JSXText",
    "value": "'var'",
    "start": 693,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 701,
    "end": 702
  }
]
```
