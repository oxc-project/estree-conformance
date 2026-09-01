__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 10
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
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
            "start": 17,
            "end": 27
          }
        ],
        "start": 11,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 56
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
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
            "start": 63,
            "end": 73
          }
        ],
        "start": 57,
        "end": 75
      },
      "abstract": false,
      "declare": false,
      "start": 30,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 90
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 103
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
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
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
            "start": 110,
            "end": 120
          }
        ],
        "start": 104,
        "end": 122
      },
      "abstract": false,
      "declare": false,
      "start": 76,
      "end": 122
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 151,
              "end": 152
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 165
              },
              "typeArguments": null,
              "start": 161,
              "end": 165
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 151,
            "end": 165
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 177,
                "end": 181
              },
              "typeArguments": null,
              "start": 177,
              "end": 181
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 167,
            "end": 181
          }
        ],
        "start": 150,
        "end": 182
      },
      "params": [
        {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 189
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
                        "start": 191,
                        "end": 192
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 192
                    },
                    "start": 189,
                    "end": 192
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 188,
                  "end": 193
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 198
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 198
                    },
                    "start": 195,
                    "end": 198
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 194,
                  "end": 198
                }
              ],
              "start": 186,
              "end": 200
            },
            "start": 184,
            "end": 200
          },
          "start": 183,
          "end": 200
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 216,
                    "end": 217
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 219
                  },
                  "optional": false,
                  "computed": false,
                  "start": 216,
                  "end": 219
                },
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 223,
                    "end": 224
                  },
                  "optional": false,
                  "computed": false,
                  "start": 221,
                  "end": 224
                }
              ],
              "start": 215,
              "end": 225
            },
            "start": 208,
            "end": 226
          }
        ],
        "start": 202,
        "end": 228
      },
      "expression": false,
      "start": 140,
      "end": 228
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 235
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 243
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 249,
                        "end": 256
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 245,
                      "end": 258
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 242,
                    "end": 258
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 261
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 267,
                        "end": 275
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 263,
                      "end": 277
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 260,
                    "end": 277
                  }
                ],
                "start": 240,
                "end": 279
              }
            ],
            "optional": false,
            "start": 238,
            "end": 280
          },
          "definite": false,
          "start": 234,
          "end": 280
        }
      ],
      "declare": false,
      "start": 230,
      "end": 281
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 296
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 314
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 306,
                      "end": 316
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 303,
                    "end": 316
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 319
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 333
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 321,
                      "end": 335
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 318,
                    "end": 335
                  }
                ],
                "start": 301,
                "end": 337
              }
            ],
            "optional": false,
            "start": 299,
            "end": 338
          },
          "definite": false,
          "start": 294,
          "end": 338
        }
      ],
      "declare": false,
      "start": 290,
      "end": 339
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 359,
        "end": 361
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 362,
              "end": 363
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 376
              },
              "typeArguments": null,
              "start": 372,
              "end": 376
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 362,
            "end": 376
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 379
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 392
              },
              "typeArguments": null,
              "start": 388,
              "end": 392
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 378,
            "end": 392
          }
        ],
        "start": 361,
        "end": 393
      },
      "params": [
        {
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 400
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
                        "start": 402,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 400,
                    "end": 403
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 399,
                  "end": 404
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 406
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 409
                    },
                    "start": 406,
                    "end": 409
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 405,
                  "end": 409
                }
              ],
              "start": 397,
              "end": 411
            },
            "start": 395,
            "end": 411
          },
          "start": 394,
          "end": 411
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "start": 430,
                        "end": 431
                      },
                      "typeArguments": null,
                      "start": 430,
                      "end": 431
                    },
                    "start": 428,
                    "end": 431
                  },
                  "start": 427,
                  "end": 431
                }
              ],
              "returnType": null,
              "body": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 436,
                  "end": 437
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
                },
                "optional": false,
                "computed": false,
                "start": 436,
                "end": 439
              },
              "id": null,
              "generator": false,
              "start": 426,
              "end": 439
            },
            "start": 419,
            "end": 440
          }
        ],
        "start": 413,
        "end": 442
      },
      "expression": false,
      "start": 350,
      "end": 442
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 450
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 453,
              "end": 455
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 458,
                      "end": 459
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 472
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 461,
                      "end": 474
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 458,
                    "end": 474
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 477
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 491
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 479,
                      "end": 493
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 476,
                    "end": 493
                  }
                ],
                "start": 456,
                "end": 495
              }
            ],
            "optional": false,
            "start": 453,
            "end": 496
          },
          "definite": false,
          "start": 448,
          "end": 496
        }
      ],
      "declare": false,
      "start": 444,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 532,
        "end": 533
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
              "start": 534,
              "end": 535
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 534,
            "end": 535
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 538
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 537,
            "end": 538
          }
        ],
        "start": 533,
        "end": 539
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 547
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
                  "start": 549,
                  "end": 550
                },
                "typeArguments": null,
                "start": 549,
                "end": 550
              },
              "start": 547,
              "end": 550
            },
            "accessibility": null,
            "static": false,
            "start": 546,
            "end": 551
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 557
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 559,
                  "end": 560
                },
                "typeArguments": null,
                "start": 559,
                "end": 560
              },
              "start": 557,
              "end": 560
            },
            "accessibility": null,
            "static": false,
            "start": 556,
            "end": 561
          }
        ],
        "start": 540,
        "end": 563
      },
      "declare": false,
      "start": 522,
      "end": 563
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 573
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 574,
                        "end": 578
                      },
                      "typeArguments": null,
                      "start": 574,
                      "end": 578
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 580,
                        "end": 587
                      },
                      "typeArguments": null,
                      "start": 580,
                      "end": 587
                    }
                  ],
                  "start": 573,
                  "end": 588
                },
                "start": 572,
                "end": 588
              },
              "start": 570,
              "end": 588
            },
            "start": 569,
            "end": 588
          },
          "init": null,
          "definite": false,
          "start": 569,
          "end": 588
        }
      ],
      "declare": false,
      "start": 565,
      "end": 589
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 594,
            "end": 596
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 601
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 603
              }
            ],
            "optional": false,
            "start": 599,
            "end": 604
          },
          "definite": false,
          "start": 594,
          "end": 604
        }
      ],
      "declare": false,
      "start": 590,
      "end": 605
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 6,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 30,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 36,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 44,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 52,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 76,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 82,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 91,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 140,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 153,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 161,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 167,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 208,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 230,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 243,
    "end": 244
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 245,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 249,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 263,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 267,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 290,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 294,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 300,
    "end": 301
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
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 306,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 310,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 350,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 359,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 364,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 378,
    "end": 379
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 380,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 388,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 419,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "T",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 433,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 444,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 451,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 453,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 461,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 465,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 479,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 483,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 522,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 534,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 557,
    "end": 558
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 562,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 565,
    "end": 568
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 569,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 574,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 580,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 590,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 594,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 602,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 604,
    "end": 605
  }
]
```
