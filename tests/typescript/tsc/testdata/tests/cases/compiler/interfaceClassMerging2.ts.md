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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
              "name": "interfaceFooMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 38
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 42,
                "end": 46
              },
              "start": 40,
              "end": 46
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 20,
            "end": 47
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceFooProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 72
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 74,
                "end": 78
              },
              "start": 72,
              "end": 78
            },
            "accessibility": null,
            "static": false,
            "start": 52,
            "end": 79
          }
        ],
        "start": 14,
        "end": 81
      },
      "declare": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 92
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classFooProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 115
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 117,
                "end": 121
              },
              "start": 115,
              "end": 121
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 99,
            "end": 122
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classFooMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 142
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 146,
                  "end": 150
                },
                "start": 144,
                "end": 150
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    },
                    "start": 161,
                    "end": 173
                  }
                ],
                "start": 151,
                "end": 179
              },
              "expression": false,
              "start": 142,
              "end": 179
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 128,
            "end": 179
          }
        ],
        "start": 93,
        "end": 181
      },
      "abstract": false,
      "declare": false,
      "start": 83,
      "end": 181
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 197
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
              "name": "interfaceBarMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 222
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 226,
                "end": 230
              },
              "start": 224,
              "end": 230
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 204,
            "end": 231
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "interfaceBarProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 256
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 258,
                "end": 262
              },
              "start": 256,
              "end": 262
            },
            "accessibility": null,
            "static": false,
            "start": 236,
            "end": 263
          }
        ],
        "start": 198,
        "end": 265
      },
      "declare": false,
      "start": 184,
      "end": 265
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 276
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 285,
        "end": 288
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classBarProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 311
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 313,
                "end": 317
              },
              "start": 311,
              "end": 317
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 295,
            "end": 318
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "classBarMethod",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 338
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSThisType",
                  "start": 342,
                  "end": 346
                },
                "start": 340,
                "end": 346
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ThisExpression",
                      "start": 364,
                      "end": 368
                    },
                    "start": 357,
                    "end": 369
                  }
                ],
                "start": 347,
                "end": 375
              },
              "expression": false,
              "start": 338,
              "end": 375
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 324,
            "end": 375
          }
        ],
        "start": 289,
        "end": 377
      },
      "abstract": false,
      "declare": false,
      "start": 267,
      "end": 377
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 387
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 397
            },
            "typeArguments": null,
            "arguments": [],
            "start": 390,
            "end": 399
          },
          "definite": false,
          "start": 384,
          "end": 399
        }
      ],
      "declare": false,
      "start": 380,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 401,
                        "end": 404
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceBarMethod",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 405,
                        "end": 423
                      },
                      "optional": false,
                      "computed": false,
                      "start": 401,
                      "end": 423
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 401,
                    "end": 425
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "interfaceFooMethod",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 444
                  },
                  "optional": false,
                  "computed": false,
                  "start": 401,
                  "end": 444
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 401,
                "end": 446
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "classBarMethod",
                "optional": false,
                "typeAnnotation": null,
                "start": 447,
                "end": 461
              },
              "optional": false,
              "computed": false,
              "start": 401,
              "end": 461
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 401,
            "end": 463
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "classFooMethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 478
          },
          "optional": false,
          "computed": false,
          "start": 401,
          "end": 478
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 401,
        "end": 480
      },
      "directive": null,
      "start": 401,
      "end": 481
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 491
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 498,
              "end": 501
            },
            "typeArguments": null,
            "arguments": [],
            "start": 494,
            "end": 503
          },
          "definite": false,
          "start": 488,
          "end": 503
        }
      ],
      "declare": false,
      "start": 484,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 506,
          "end": 509
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 512,
          "end": 515
        },
        "start": 506,
        "end": 515
      },
      "directive": null,
      "start": 506,
      "end": 516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 516
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
    "value": "Foo",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "interfaceFooMethod",
    "start": 20,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 42,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "interfaceFooProperty",
    "start": 52,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "classFooProperty",
    "start": 99,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 117,
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
    "value": "classFooMethod",
    "start": 128,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 146,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 161,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 168,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 184,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 194,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "interfaceBarMethod",
    "start": 204,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 226,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "interfaceBarProperty",
    "start": 236,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 258,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 267,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 273,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 277,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 285,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "classBarProperty",
    "start": 295,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 313,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "classBarMethod",
    "start": 324,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 340,
    "end": 341
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 357,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 364,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 388,
    "end": 389
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 390,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 397,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 401,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "interfaceBarMethod",
    "start": 405,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "interfaceFooMethod",
    "start": 426,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "classBarMethod",
    "start": 447,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "classFooMethod",
    "start": 464,
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
    "type": "Keyword",
    "value": "var",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 492,
    "end": 493
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 494,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 498,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "foo",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516
  }
]
```
