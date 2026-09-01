__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "prepareConfig",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 29
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 51
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 67
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 63,
                              "end": 67
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 70,
                              "end": 72
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 63,
                            "end": 72
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 63,
                          "end": 72
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 78
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 81,
                      "end": 83
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 83
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 36,
                  "end": 83
                }
              ],
              "optional": false,
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
                        "name": "additionalFiles",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 106
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Partial",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 109,
                            "end": 116
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Record",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 117,
                                  "end": 123
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSUnionType",
                                      "types": [
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "json",
                                            "raw": "\"json\"",
                                            "start": 124,
                                            "end": 130
                                          },
                                          "start": 124,
                                          "end": 130
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "jsonc",
                                            "raw": "\"jsonc\"",
                                            "start": 133,
                                            "end": 140
                                          },
                                          "start": 133,
                                          "end": 140
                                        },
                                        {
                                          "type": "TSLiteralType",
                                          "literal": {
                                            "type": "Literal",
                                            "value": "json5",
                                            "raw": "\"json5\"",
                                            "start": 143,
                                            "end": 150
                                          },
                                          "start": 143,
                                          "end": 150
                                        }
                                      ],
                                      "start": 124,
                                      "end": 150
                                    },
                                    {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSStringKeyword",
                                        "start": 152,
                                        "end": 158
                                      },
                                      "start": 152,
                                      "end": 160
                                    }
                                  ],
                                  "start": 123,
                                  "end": 161
                                },
                                "start": 117,
                                "end": 161
                              }
                            ],
                            "start": 116,
                            "end": 162
                          },
                          "start": 109,
                          "end": 162
                        },
                        "start": 107,
                        "end": 162
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 91,
                      "end": 163
                    }
                  ],
                  "start": 87,
                  "end": 165
                },
                "start": 85,
                "end": 165
              },
              "start": 30,
              "end": 165
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 168,
              "end": 170
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 170
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 182
              },
              "directive": null,
              "start": 178,
              "end": 182
            }
          ],
          "start": 172,
          "end": 196
        },
        "expression": false,
        "start": 7,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 196
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "prepareConfigWithoutAnnotation",
          "optional": false,
          "typeAnnotation": null,
          "start": 214,
          "end": 244
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "additionalFiles",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 266
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "json",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 282
                          },
                          "value": {
                            "type": "AssignmentPattern",
                            "decorators": [],
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "json",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 278,
                              "end": 282
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 285,
                              "end": 287
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 278,
                            "end": 287
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 278,
                          "end": 287
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 293
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 296,
                      "end": 298
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 298
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 251,
                  "end": 298
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 245,
              "end": 300
            },
            "right": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 303,
              "end": 305
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 305
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "json",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 317
              },
              "directive": null,
              "start": 313,
              "end": 317
            }
          ],
          "start": 307,
          "end": 319
        },
        "expression": false,
        "start": 205,
        "end": 319
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 198,
      "end": 319
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
              "name": "prepareConfigWithContextualSignature",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "param",
                      "optional": false,
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
                                "name": "additionalFiles",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 383,
                                "end": 398
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Partial",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 401,
                                    "end": 408
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Record",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 409,
                                          "end": 415
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSUnionType",
                                              "types": [
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "json",
                                                    "raw": "\"json\"",
                                                    "start": 416,
                                                    "end": 422
                                                  },
                                                  "start": 416,
                                                  "end": 422
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "jsonc",
                                                    "raw": "\"jsonc\"",
                                                    "start": 425,
                                                    "end": 432
                                                  },
                                                  "start": 425,
                                                  "end": 432
                                                },
                                                {
                                                  "type": "TSLiteralType",
                                                  "literal": {
                                                    "type": "Literal",
                                                    "value": "json5",
                                                    "raw": "\"json5\"",
                                                    "start": 435,
                                                    "end": 442
                                                  },
                                                  "start": 435,
                                                  "end": 442
                                                }
                                              ],
                                              "start": 416,
                                              "end": 442
                                            },
                                            {
                                              "type": "TSArrayType",
                                              "elementType": {
                                                "type": "TSStringKeyword",
                                                "start": 444,
                                                "end": 450
                                              },
                                              "start": 444,
                                              "end": 452
                                            }
                                          ],
                                          "start": 415,
                                          "end": 453
                                        },
                                        "start": 409,
                                        "end": 453
                                      }
                                    ],
                                    "start": 408,
                                    "end": 454
                                  },
                                  "start": 401,
                                  "end": 454
                                },
                                "start": 399,
                                "end": 454
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 383,
                              "end": 455
                            }
                          ],
                          "start": 379,
                          "end": 457
                        },
                        "start": 378,
                        "end": 457
                      },
                      "start": 373,
                      "end": 457
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 462,
                      "end": 466
                    },
                    "start": 459,
                    "end": 466
                  },
                  "start": 372,
                  "end": 466
                },
                "start": 370,
                "end": 466
              },
              "start": 334,
              "end": 466
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "additionalFiles",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 491
                        },
                        "value": {
                          "type": "AssignmentPattern",
                          "decorators": [],
                          "left": {
                            "type": "ObjectPattern",
                            "decorators": [],
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "json",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 503,
                                  "end": 507
                                },
                                "value": {
                                  "type": "AssignmentPattern",
                                  "decorators": [],
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "json",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 503,
                                    "end": 507
                                  },
                                  "right": {
                                    "type": "ArrayExpression",
                                    "elements": [],
                                    "start": 510,
                                    "end": 512
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 503,
                                  "end": 512
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 503,
                                "end": 512
                              }
                            ],
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 493,
                            "end": 518
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 521,
                            "end": 523
                          },
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 493,
                          "end": 523
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 476,
                        "end": 523
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 470,
                    "end": 525
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 528,
                    "end": 530
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 470,
                  "end": 530
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "json",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 541,
                      "end": 545
                    },
                    "directive": null,
                    "start": 541,
                    "end": 545
                  }
                ],
                "start": 535,
                "end": 559
              },
              "id": null,
              "generator": false,
              "start": 469,
              "end": 559
            },
            "definite": false,
            "start": 334,
            "end": 559
          }
        ],
        "declare": false,
        "start": 328,
        "end": 559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 321,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "prepareConfig",
    "start": 16,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "additionalFiles",
    "start": 36,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 63,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "additionalFiles",
    "start": 91,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 109,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 124,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "\"jsonc\"",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 141,
    "end": 142
  },
  {
    "type": "String",
    "value": "\"json5\"",
    "start": 143,
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
    "value": "string",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
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
    "value": "json",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 198,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 205,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "prepareConfigWithoutAnnotation",
    "start": 214,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "additionalFiles",
    "start": 251,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 313,
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
    "value": "export",
    "start": 321,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 328,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "prepareConfigWithContextualSignature",
    "start": 334,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "param",
    "start": 373,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 378,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 379,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "additionalFiles",
    "start": 383,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 401,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 409,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 415,
    "end": 416
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 416,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 423,
    "end": 424
  },
  {
    "type": "String",
    "value": "\"jsonc\"",
    "start": 425,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 433,
    "end": 434
  },
  {
    "type": "String",
    "value": "\"json5\"",
    "start": 435,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 444,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "=>",
    "start": 459,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 462,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "additionalFiles",
    "start": 476,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 493,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "json",
    "start": 503,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 517,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 532,
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
    "value": "json",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559
  }
]
```
