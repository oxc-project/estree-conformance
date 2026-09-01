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
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
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
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 23
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 24,
                "end": 27
              },
              "start": 23,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 28
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 37
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 37,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 33,
            "end": 45
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 54
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 55,
                "end": 58
              },
              "start": 54,
              "end": 58
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 59
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              },
              "start": 69,
              "end": 74
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 64,
            "end": 75
          }
        ],
        "start": 13,
        "end": 77
      },
      "declare": false,
      "start": 0,
      "end": 77
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 91
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 101,
                    "end": 107
                  },
                  "start": 100,
                  "end": 107
                },
                "start": 99,
                "end": 107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 111,
                    "end": 117
                  },
                  "start": 110,
                  "end": 117
                },
                "start": 109,
                "end": 117
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 119,
                "end": 123
              },
              "start": 118,
              "end": 123
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 95,
            "end": 124
          }
        ],
        "start": 92,
        "end": 126
      },
      "declare": false,
      "start": 79,
      "end": 126
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 136
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null,
            "start": 148,
            "end": 150
          },
          "typeArguments": null,
          "start": 148,
          "end": 150
        },
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I2",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 153
          },
          "typeArguments": null,
          "start": 151,
          "end": 153
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 171,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 160,
            "end": 174
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 187
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 191,
                      "end": 197
                    },
                    "start": 190,
                    "end": 197
                  },
                  "start": 188,
                  "end": 197
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    },
                    "start": 201,
                    "end": 208
                  },
                  "start": 199,
                  "end": 208
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 210,
                "end": 213
              },
              "expression": false,
              "start": 187,
              "end": 213
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 176,
            "end": 213
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iAny",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 230
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 231,
                "end": 234
              },
              "start": 230,
              "end": 234
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 218,
            "end": 235
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNum",
              "optional": false,
              "typeAnnotation": null,
              "start": 248,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 254,
                "end": 260
              },
              "start": 253,
              "end": 260
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 240,
            "end": 261
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iObj",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 278
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 280,
                "end": 283
              },
              "start": 279,
              "end": 283
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 266,
            "end": 284
          }
        ],
        "start": 154,
        "end": 286
      },
      "abstract": false,
      "declare": false,
      "start": 128,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 300
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 308
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 310,
                "end": 316
              },
              "start": 308,
              "end": 316
            },
            "accessibility": null,
            "static": false,
            "start": 307,
            "end": 317
          }
        ],
        "start": 301,
        "end": 319
      },
      "declare": false,
      "start": 288,
      "end": 319
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I4",
        "optional": false,
        "typeAnnotation": null,
        "start": 331,
        "end": 333
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 343,
                  "end": 345
                },
                "typeArguments": null,
                "start": 343,
                "end": 345
              },
              "start": 342,
              "end": 345
            },
            "start": 340,
            "end": 346
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 358,
                  "end": 360
                },
                "typeArguments": null,
                "start": 358,
                "end": 360
              },
              "start": 357,
              "end": 360
            },
            "start": 351,
            "end": 361
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 372,
                    "end": 378
                  },
                  "start": 371,
                  "end": 378
                },
                "start": 367,
                "end": 378
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 380,
                "end": 386
              },
              "start": 379,
              "end": 386
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 366,
            "end": 387
          }
        ],
        "start": 334,
        "end": 389
      },
      "declare": false,
      "start": 321,
      "end": 389
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 397,
        "end": 399
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I3",
            "optional": false,
            "typeAnnotation": null,
            "start": 411,
            "end": 413
          },
          "typeArguments": null,
          "start": 411,
          "end": 413
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 431,
              "end": 432
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 420,
            "end": 433
          }
        ],
        "start": 414,
        "end": 435
      },
      "abstract": false,
      "declare": false,
      "start": 391,
      "end": 435
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 443,
                  "end": 445
                },
                "typeArguments": null,
                "start": 443,
                "end": 445
              },
              "start": 442,
              "end": 445
            },
            "start": 441,
            "end": 445
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 478
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 472,
                    "end": 480
                  },
                  "start": 465,
                  "end": 481
                }
              ],
              "start": 458,
              "end": 483
            },
            "expression": false,
            "start": 448,
            "end": 483
          },
          "definite": false,
          "start": 441,
          "end": 483
        }
      ],
      "declare": false,
      "start": 437,
      "end": 483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 488,
          "end": 489
        },
        "typeArguments": null,
        "arguments": [],
        "start": 484,
        "end": 491
      },
      "directive": null,
      "start": 484,
      "end": 492
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 540
                },
                "typeArguments": null,
                "start": 538,
                "end": 540
              },
              "start": 537,
              "end": 540
            },
            "start": 536,
            "end": 540
          },
          "init": null,
          "definite": false,
          "start": 536,
          "end": 540
        }
      ],
      "declare": true,
      "start": 524,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 542,
          "end": 543
        },
        "property": {
          "type": "Literal",
          "value": 5,
          "raw": "5",
          "start": 544,
          "end": 545
        },
        "optional": false,
        "computed": true,
        "start": 542,
        "end": 546
      },
      "directive": null,
      "start": 542,
      "end": 547
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "property": {
          "type": "Literal",
          "value": "foo",
          "raw": "\"foo\"",
          "start": 550,
          "end": 555
        },
        "optional": false,
        "computed": true,
        "start": 548,
        "end": 556
      },
      "directive": null,
      "start": 548,
      "end": 557
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 557
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
    "value": "I1",
    "start": 10,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "iObj",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "iNum",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "iAny",
    "start": 50,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "iFn",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 79,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 89,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "iFn",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 111,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 119,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 128,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 134,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 137,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 148,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 151,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 160,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "iFn",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 176,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "iFn",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "value": "number",
    "start": 191,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 202,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 218,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "iAny",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 231,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 240,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "iNum",
    "start": 248,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 254,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 260,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 266,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "iObj",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 288,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 298,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 310,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 321,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 331,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 343,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 358,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 367,
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
    "value": "number",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 380,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 391,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 397,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 400,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 411,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 420,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 437,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 443,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 446,
    "end": 447
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 465,
    "end": 471
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 472,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 476,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 479,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 482,
    "end": 483
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 490,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 524,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 532,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "I4",
    "start": 538,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 543,
    "end": 544
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 550,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  }
]
```
