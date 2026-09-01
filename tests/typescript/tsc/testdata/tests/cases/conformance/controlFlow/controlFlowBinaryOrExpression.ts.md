__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 7,
                    "end": 13
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 16,
                    "end": 22
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 25,
                    "end": 32
                  }
                ],
                "start": 7,
                "end": 32
              },
              "start": 5,
              "end": 32
            },
            "start": 4,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 44,
                "end": 51
              },
              "start": 42,
              "end": 51
            },
            "start": 38,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 38,
          "end": 51
        }
      ],
      "declare": false,
      "start": 34,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "right": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 59,
            "end": 61
          },
          "start": 55,
          "end": 61
        },
        "operator": "||",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 68
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 71,
            "end": 72
          },
          "start": 67,
          "end": 72
        },
        "start": 54,
        "end": 73
      },
      "directive": null,
      "start": 54,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 76
      },
      "directive": null,
      "start": 75,
      "end": 77
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 98,
          "end": 99
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 102,
          "end": 104
        },
        "start": 98,
        "end": 104
      },
      "directive": null,
      "start": 98,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "cond",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 110
        },
        "operator": "||",
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 119,
            "end": 120
          },
          "start": 115,
          "end": 120
        },
        "start": 106,
        "end": 121
      },
      "directive": null,
      "start": 106,
      "end": 122
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 124
      },
      "directive": null,
      "start": 123,
      "end": 125
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NodeList",
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
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 184
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 186,
                  "end": 192
                },
                "start": 184,
                "end": 192
              },
              "accessibility": null,
              "static": false,
              "start": 178,
              "end": 193
            }
          ],
          "start": 172,
          "end": 195
        },
        "declare": false,
        "start": 153,
        "end": 195
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 146,
      "end": 195
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "HTMLCollection",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 228
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
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 241
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 243,
                  "end": 249
                },
                "start": 241,
                "end": 249
              },
              "accessibility": null,
              "static": false,
              "start": 235,
              "end": 250
            }
          ],
          "start": 229,
          "end": 252
        },
        "declare": false,
        "start": 204,
        "end": 252
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 197,
      "end": 252
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isNodeList",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 281
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 293,
              "end": 296
            },
            "start": 291,
            "end": 296
          },
          "start": 282,
          "end": 296
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 308
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "NodeList",
                "optional": false,
                "typeAnnotation": null,
                "start": 312,
                "end": 320
              },
              "typeArguments": null,
              "start": 312,
              "end": 320
            },
            "start": 312,
            "end": 320
          },
          "start": 299,
          "end": 320
        },
        "start": 297,
        "end": 320
      },
      "body": null,
      "expression": false,
      "start": 254,
      "end": 321
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isHTMLCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 339,
        "end": 355
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "sourceObj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 367,
              "end": 370
            },
            "start": 365,
            "end": 370
          },
          "start": 356,
          "end": 370
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 373,
            "end": 382
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLCollection",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 400
              },
              "typeArguments": null,
              "start": 386,
              "end": 400
            },
            "start": 386,
            "end": 400
          },
          "start": 373,
          "end": 400
        },
        "start": 371,
        "end": 400
      },
      "body": null,
      "expression": false,
      "start": 322,
      "end": 401
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventTargetLike",
        "optional": false,
        "typeAnnotation": null,
        "start": 408,
        "end": 423
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 427,
                  "end": 428
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 430,
                    "end": 436
                  },
                  "start": 428,
                  "end": 436
                },
                "accessibility": null,
                "static": false,
                "start": 427,
                "end": 436
              }
            ],
            "start": 426,
            "end": 437
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "HTMLCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 454
            },
            "typeArguments": null,
            "start": 440,
            "end": 454
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NodeList",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 465
            },
            "typeArguments": null,
            "start": 457,
            "end": 465
          }
        ],
        "start": 426,
        "end": 465
      },
      "declare": false,
      "start": 403,
      "end": 466
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "EventTargetLike",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 483,
                  "end": 498
                },
                "typeArguments": null,
                "start": 483,
                "end": 498
              },
              "start": 481,
              "end": 498
            },
            "start": 472,
            "end": 498
          },
          "init": {
            "type": "TSTypeAssertion",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 502,
              "end": 505
            },
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 515
            },
            "start": 501,
            "end": 515
          },
          "definite": false,
          "start": 472,
          "end": 515
        }
      ],
      "declare": false,
      "start": 468,
      "end": 516
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isNodeList",
          "optional": false,
          "typeAnnotation": null,
          "start": 521,
          "end": 531
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 532,
            "end": 541
          }
        ],
        "optional": false,
        "start": 521,
        "end": 542
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 559
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 566
              },
              "optional": false,
              "computed": false,
              "start": 550,
              "end": 566
            },
            "directive": null,
            "start": 550,
            "end": 567
          }
        ],
        "start": 544,
        "end": 569
      },
      "alternate": null,
      "start": 517,
      "end": 569
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isHTMLCollection",
          "optional": false,
          "typeAnnotation": null,
          "start": 575,
          "end": 591
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "sourceObj",
            "optional": false,
            "typeAnnotation": null,
            "start": 592,
            "end": 601
          }
        ],
        "optional": false,
        "start": 575,
        "end": 602
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 610,
                "end": 619
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 626
              },
              "optional": false,
              "computed": false,
              "start": 610,
              "end": 626
            },
            "directive": null,
            "start": 610,
            "end": 627
          }
        ],
        "start": 604,
        "end": 629
      },
      "alternate": null,
      "start": 571,
      "end": 629
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNodeList",
            "optional": false,
            "typeAnnotation": null,
            "start": 635,
            "end": 645
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 646,
              "end": 655
            }
          ],
          "optional": false,
          "start": 635,
          "end": 656
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "isHTMLCollection",
            "optional": false,
            "typeAnnotation": null,
            "start": 660,
            "end": 676
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "sourceObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 686
            }
          ],
          "optional": false,
          "start": 660,
          "end": 687
        },
        "start": 635,
        "end": 687
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "sourceObj",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 704
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 711
              },
              "optional": false,
              "computed": false,
              "start": 695,
              "end": 711
            },
            "directive": null,
            "start": 695,
            "end": 712
          }
        ],
        "start": 689,
        "end": 714
      },
      "alternate": null,
      "start": 631,
      "end": 714
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 714
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "let",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 16,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 25,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 34,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 38,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 44,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 69,
    "end": 70
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "cond",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 146,
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
    "value": "NodeList",
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
    "value": "length",
    "start": 178,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 197,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "HTMLCollection",
    "start": 214,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 229,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 235,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 254,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 262,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "isNodeList",
    "start": 271,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 282,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 293,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 299,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 309,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "NodeList",
    "start": 312,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 322,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 330,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "isHTMLCollection",
    "start": 339,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 356,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 373,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 383,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "HTMLCollection",
    "start": 386,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 403,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "EventTargetLike",
    "start": 408,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 430,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "HTMLCollection",
    "start": 440,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "NodeList",
    "start": 457,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 468,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 472,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "EventTargetLike",
    "start": 483,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 499,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 502,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 506,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "isNodeList",
    "start": 521,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 532,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 550,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 560,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 571,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575
  },
  {
    "type": "Identifier",
    "value": "isHTMLCollection",
    "start": 575,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 592,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 610,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 619,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 620,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 631,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "isNodeList",
    "start": 635,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 646,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 657,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "isHTMLCollection",
    "start": 660,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 677,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "sourceObj",
    "start": 695,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 713,
    "end": 714
  }
]
```
