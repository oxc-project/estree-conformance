__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 56
          },
          "start": 51,
          "end": 56
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "'react'",
        "start": 62,
        "end": 69
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 70
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Internal",
        "optional": false,
        "typeAnnotation": null,
        "start": 142,
        "end": 150
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": null,
          "start": 151,
          "end": 155
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 171,
                  "end": 174
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 170,
                "end": 175
              },
              "children": [
                {
                  "type": "JSXExpressionContainer",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 180
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "text",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 185
                    },
                    "optional": false,
                    "computed": false,
                    "start": 176,
                    "end": 185
                  },
                  "start": 175,
                  "end": 186
                }
              ],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 188,
                  "end": 191
                },
                "start": 186,
                "end": 192
              },
              "start": 170,
              "end": 192
            },
            "start": 163,
            "end": 192
          }
        ],
        "start": 157,
        "end": 194
      },
      "expression": false,
      "start": 133,
      "end": 194
    },
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
            "name": "Internal",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 203
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 208
          },
          "optional": false,
          "computed": false,
          "start": 195,
          "end": 208
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
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 213,
                "end": 217
              },
              "value": {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 219,
                "end": 225
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 213,
              "end": 225
            }
          ],
          "start": 211,
          "end": 227
        },
        "start": 195,
        "end": 227
      },
      "directive": null,
      "start": 195,
      "end": 228
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PublicInternalBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 264
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Internal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 275
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "optional": false,
                "computed": false,
                "start": 267,
                "end": 280
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 281,
                  "end": 283
                }
              ],
              "optional": false,
              "start": 267,
              "end": 284
            },
            "definite": false,
            "start": 243,
            "end": 284
          }
        ],
        "declare": false,
        "start": 237,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 230,
      "end": 285
    },
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
            "name": "PublicInternalBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 307
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 312
          },
          "optional": false,
          "computed": false,
          "start": 286,
          "end": 312
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
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 321
              },
              "value": {
                "type": "Literal",
                "value": "bind text",
                "raw": "'bind text'",
                "start": 323,
                "end": 334
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 317,
              "end": 334
            }
          ],
          "start": 315,
          "end": 336
        },
        "start": 286,
        "end": 336
      },
      "directive": null,
      "start": 286,
      "end": 337
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Exported",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 424
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 425,
            "end": 429
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "JSXElement",
                "openingElement": {
                  "type": "JSXOpeningElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 445,
                    "end": 448
                  },
                  "typeArguments": null,
                  "attributes": [],
                  "selfClosing": false,
                  "start": 444,
                  "end": 449
                },
                "children": [
                  {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 454
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "text",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 459
                      },
                      "optional": false,
                      "computed": false,
                      "start": 450,
                      "end": 459
                    },
                    "start": 449,
                    "end": 460
                  }
                ],
                "closingElement": {
                  "type": "JSXClosingElement",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "div",
                    "start": 462,
                    "end": 465
                  },
                  "start": 460,
                  "end": 466
                },
                "start": 444,
                "end": 466
              },
              "start": 437,
              "end": 466
            }
          ],
          "start": 431,
          "end": 468
        },
        "expression": false,
        "start": 407,
        "end": 468
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 400,
      "end": 468
    },
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
            "name": "Exported",
            "optional": false,
            "typeAnnotation": null,
            "start": 469,
            "end": 477
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 482
          },
          "optional": false,
          "computed": false,
          "start": 469,
          "end": 482
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
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 491
              },
              "value": {
                "type": "Literal",
                "value": "text",
                "raw": "'text'",
                "start": 493,
                "end": 499
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 487,
              "end": 499
            }
          ],
          "start": 485,
          "end": 501
        },
        "start": 469,
        "end": 501
      },
      "directive": null,
      "start": 469,
      "end": 502
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "PublicExportedBinding",
              "optional": false,
              "typeAnnotation": null,
              "start": 517,
              "end": 538
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Exported",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 541,
                  "end": 549
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 550,
                  "end": 554
                },
                "optional": false,
                "computed": false,
                "start": 541,
                "end": 554
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 555,
                  "end": 557
                }
              ],
              "optional": false,
              "start": 541,
              "end": 558
            },
            "definite": false,
            "start": 517,
            "end": 558
          }
        ],
        "declare": false,
        "start": 511,
        "end": 559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 504,
      "end": 559
    },
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
            "name": "PublicExportedBinding",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 581
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 582,
            "end": 586
          },
          "optional": false,
          "computed": false,
          "start": 560,
          "end": 586
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
                "name": "text",
                "optional": false,
                "typeAnnotation": null,
                "start": 591,
                "end": 595
              },
              "value": {
                "type": "Literal",
                "value": "bind text",
                "raw": "'bind text'",
                "start": 597,
                "end": 608
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 591,
              "end": 608
            }
          ],
          "start": 589,
          "end": 610
        },
        "start": 560,
        "end": 610
      },
      "directive": null,
      "start": 560,
      "end": 611
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 611
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 57,
    "end": 61
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 62,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 142,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 170,
    "end": 171
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176
  },
  {
    "type": "JSXIdentifier",
    "value": "args",
    "start": 176,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 187,
    "end": 188
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 188,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 195,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 204,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 219,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 230,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "PublicInternalBinding",
    "start": 243,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Internal",
    "start": 267,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "PublicInternalBinding",
    "start": 286,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 321,
    "end": 322
  },
  {
    "type": "String",
    "value": "'bind text'",
    "start": 323,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 400,
    "end": 406
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 407,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 416,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 425,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 444,
    "end": 445
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 445,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 449,
    "end": 450
  },
  {
    "type": "JSXIdentifier",
    "value": "args",
    "start": 450,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 454,
    "end": 455
  },
  {
    "type": "JSXIdentifier",
    "value": "text",
    "start": 455,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 461,
    "end": 462
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 462,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 469,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 477,
    "end": 478
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 478,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 487,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 493,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 504,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 511,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "PublicExportedBinding",
    "start": 517,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Exported",
    "start": 541,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 549,
    "end": 550
  },
  {
    "type": "Identifier",
    "value": "bind",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 558,
    "end": 559
  },
  {
    "type": "Identifier",
    "value": "PublicExportedBinding",
    "start": 560,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 582,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 591,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 595,
    "end": 596
  },
  {
    "type": "String",
    "value": "'bind text'",
    "start": 597,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 610,
    "end": 611
  }
]
```
