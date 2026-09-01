__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
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
                "type": "PrivateIdentifier",
                "name": "a",
                "start": 21,
                "end": 23
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 26,
                "end": 27
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 21,
              "end": 28
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "b",
                "start": 33,
                "end": 35
              },
              "value": {
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 40,
                            "end": 44
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "c",
                            "start": 45,
                            "end": 47
                          },
                          "optional": false,
                          "computed": false,
                          "start": 40,
                          "end": 47
                        },
                        "right": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 50,
                          "end": 52
                        },
                        "start": 40,
                        "end": 52
                      },
                      "directive": null,
                      "start": 40,
                      "end": 53
                    }
                  ],
                  "start": 38,
                  "end": 55
                },
                "expression": false,
                "start": 35,
                "end": 55
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 33,
              "end": 55
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "PrivateIdentifier",
                "name": "c",
                "start": 64,
                "end": 66
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
                    },
                    "start": 67,
                    "end": 76
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
                        "operator": "+=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 80,
                            "end": 84
                          },
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "a",
                            "start": 85,
                            "end": 87
                          },
                          "optional": false,
                          "computed": false,
                          "start": 80,
                          "end": 87
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 91,
                          "end": 92
                        },
                        "start": 80,
                        "end": 92
                      },
                      "directive": null,
                      "start": 80,
                      "end": 93
                    }
                  ],
                  "start": 78,
                  "end": 95
                },
                "expression": false,
                "start": 66,
                "end": 95
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 60,
              "end": 95
            }
          ],
          "start": 15,
          "end": 97
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "PrivateIdentifier",
    "value": "b",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 40,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "PrivateIdentifier",
    "value": "c",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 60,
    "end": 63
  },
  {
    "type": "PrivateIdentifier",
    "value": "c",
    "start": 64,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 84,
    "end": 85
  },
  {
    "type": "PrivateIdentifier",
    "value": "a",
    "start": 85,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 88,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldGet",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 140
        },
        "generator": false,
        "async": false,
        "declare": true,
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
                "start": 141,
                "end": 142
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 151,
                "end": 157
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 141,
              "end": 157
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 159,
              "end": 160
            }
          ],
          "start": 140,
          "end": 161
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
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
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 170,
              "end": 173
            },
            "start": 162,
            "end": 173
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 182,
                "end": 185
              },
              "start": 180,
              "end": 185
            },
            "start": 175,
            "end": 185
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 189
            },
            "typeArguments": null,
            "start": 188,
            "end": 189
          },
          "start": 186,
          "end": 189
        },
        "body": null,
        "expression": false,
        "start": 101,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 94,
      "end": 190
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "__classPrivateFieldSet",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 237
        },
        "generator": false,
        "async": false,
        "declare": true,
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
                "start": 238,
                "end": 239
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 248,
                "end": 254
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 238,
              "end": 254
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 256,
              "end": 257
            }
          ],
          "start": 237,
          "end": 258
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "receiver",
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
                  "start": 269,
                  "end": 270
                },
                "typeArguments": null,
                "start": 269,
                "end": 270
              },
              "start": 267,
              "end": 270
            },
            "start": 259,
            "end": 270
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "state",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              },
              "start": 277,
              "end": 282
            },
            "start": 272,
            "end": 282
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 292
                },
                "typeArguments": null,
                "start": 291,
                "end": 292
              },
              "start": 289,
              "end": 292
            },
            "start": 284,
            "end": 292
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 295,
              "end": 296
            },
            "typeArguments": null,
            "start": 295,
            "end": 296
          },
          "start": 293,
          "end": 296
        },
        "body": null,
        "expression": false,
        "start": 198,
        "end": 297
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 191,
      "end": 297
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 94,
  "end": 297
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 94,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 101,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 109,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "__classPrivateFieldGet",
    "start": 118,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "V",
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
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 198,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 206,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "__classPrivateFieldSet",
    "start": 215,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 240,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 248,
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
    "value": "V",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "receiver",
    "start": 259,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 270,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 272,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297
  }
]
```
