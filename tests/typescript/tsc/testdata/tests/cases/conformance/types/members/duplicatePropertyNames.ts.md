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
        "name": "Number",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 71
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 81
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 83,
                "end": 89
              },
              "start": 81,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 78,
            "end": 90
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 100,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 107
          }
        ],
        "start": 72,
        "end": 109
      },
      "declare": false,
      "start": 55,
      "end": 109
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "String",
        "optional": false,
        "typeAnnotation": null,
        "start": 121,
        "end": 127
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 137
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 134,
            "end": 148
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 160,
                "end": 166
              },
              "start": 158,
              "end": 166
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 153,
            "end": 167
          }
        ],
        "start": 128,
        "end": 169
      },
      "declare": false,
      "start": 111,
      "end": 169
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 181,
        "end": 186
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 187,
            "end": 188
          }
        ],
        "start": 186,
        "end": 189
      },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "typeArguments": null,
                "start": 201,
                "end": 202
              },
              "start": 199,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 196,
            "end": 203
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 208,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 213,
                  "end": 214
                },
                "typeArguments": null,
                "start": 213,
                "end": 214
              },
              "start": 211,
              "end": 214
            },
            "accessibility": null,
            "static": false,
            "start": 208,
            "end": 215
          }
        ],
        "start": 190,
        "end": 217
      },
      "declare": false,
      "start": 171,
      "end": 217
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 236
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 238,
                "end": 244
              },
              "start": 236,
              "end": 244
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
            "start": 233,
            "end": 245
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 253
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 255,
                "end": 261
              },
              "start": 253,
              "end": 261
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
            "start": 250,
            "end": 262
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 271
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 273
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 275,
                "end": 278
              },
              "expression": false,
              "start": 271,
              "end": 278
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 268,
            "end": 278
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 286
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 288
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 290,
                "end": 293
              },
              "expression": false,
              "start": 286,
              "end": 293
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 283,
            "end": 293
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 302
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 311,
                "end": 314
              },
              "id": null,
              "generator": false,
              "start": 305,
              "end": 314
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 299,
            "end": 314
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 322
            },
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 331,
                "end": 334
              },
              "id": null,
              "generator": false,
              "start": 325,
              "end": 334
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 319,
            "end": 334
          }
        ],
        "start": 227,
        "end": 336
      },
      "abstract": false,
      "declare": false,
      "start": 219,
      "end": 336
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 348,
        "end": 349
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 359
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 361,
                "end": 367
              },
              "start": 359,
              "end": 367
            },
            "accessibility": null,
            "static": false,
            "start": 356,
            "end": 368
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 376
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 378,
                "end": 384
              },
              "start": 376,
              "end": 384
            },
            "accessibility": null,
            "static": false,
            "start": 373,
            "end": 385
          }
        ],
        "start": 350,
        "end": 387
      },
      "declare": false,
      "start": 338,
      "end": 387
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 405
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 407,
                        "end": 413
                      },
                      "start": 405,
                      "end": 413
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 402,
                    "end": 414
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 422
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      },
                      "start": 422,
                      "end": 430
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 419,
                    "end": 431
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 437,
                      "end": 440
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 448,
                            "end": 450
                          },
                          "start": 445,
                          "end": 450
                        },
                        "start": 442,
                        "end": 450
                      },
                      "start": 440,
                      "end": 450
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 437,
                    "end": 451
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 456,
                      "end": 459
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 467,
                            "end": 469
                          },
                          "start": 464,
                          "end": 469
                        },
                        "start": 461,
                        "end": 469
                      },
                      "start": 459,
                      "end": 469
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 456,
                    "end": 470
                  }
                ],
                "start": 396,
                "end": 472
              },
              "start": 394,
              "end": 472
            },
            "start": 393,
            "end": 472
          },
          "init": null,
          "definite": false,
          "start": 393,
          "end": 472
        }
      ],
      "declare": false,
      "start": 389,
      "end": 472
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 479
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 491
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 493,
                  "end": 495
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 488,
                "end": 495
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 501,
                  "end": 504
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 506,
                  "end": 508
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 501,
                "end": 508
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 517
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 525,
                    "end": 528
                  },
                  "id": null,
                  "generator": false,
                  "start": 519,
                  "end": 528
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 514,
                "end": 528
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 537
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 545,
                    "end": 548
                  },
                  "id": null,
                  "generator": false,
                  "start": 539,
                  "end": 548
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 534,
                "end": 548
              }
            ],
            "start": 482,
            "end": 550
          },
          "definite": false,
          "start": 478,
          "end": 550
        }
      ],
      "declare": false,
      "start": 474,
      "end": 550
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 55,
  "end": 550
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 55,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 83,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 111,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
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
    "type": "Identifier",
    "value": "foo",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 171,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 181,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 196,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 208,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 219,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 233,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 250,
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
    "value": "string",
    "start": 255,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 328,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 338,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 350,
    "end": 351
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 356,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 361,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 367,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 378,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 389,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 424,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 437,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 445,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 456,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
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
    "value": "=>",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 474,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 488,
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
    "value": "''",
    "start": 493,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 501,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "''",
    "start": 506,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 514,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 522,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 534,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 542,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  }
]
```
