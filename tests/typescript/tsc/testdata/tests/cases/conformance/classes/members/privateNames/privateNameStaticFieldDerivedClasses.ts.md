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
              "type": "PrivateIdentifier",
              "name": "prop",
              "start": 24,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 31,
                "end": 37
              },
              "start": 29,
              "end": 37
            },
            "value": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 40,
              "end": 43
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 44
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 56,
              "end": 62
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 73
                      },
                      "typeArguments": null,
                      "start": 66,
                      "end": 73
                    },
                    "start": 64,
                    "end": 73
                  },
                  "start": 63,
                  "end": 73
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 92
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "derivedProp",
                        "start": 93,
                        "end": 105
                      },
                      "optional": false,
                      "computed": false,
                      "start": 85,
                      "end": 105
                    },
                    "directive": null,
                    "start": 85,
                    "end": 105
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
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 127
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "prop",
                          "start": 128,
                          "end": 133
                        },
                        "optional": false,
                        "computed": false,
                        "start": 123,
                        "end": 133
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 137,
                        "end": 139
                      },
                      "start": 123,
                      "end": 139
                    },
                    "directive": null,
                    "start": 123,
                    "end": 140
                  }
                ],
                "start": 75,
                "end": 146
              },
              "expression": false,
              "start": 62,
              "end": 146
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 49,
            "end": 146
          }
        ],
        "start": 11,
        "end": 148
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 148
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
        "start": 155,
        "end": 162
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 175
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
              "type": "PrivateIdentifier",
              "name": "derivedProp",
              "start": 189,
              "end": 201
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 203,
                "end": 209
              },
              "start": 201,
              "end": 209
            },
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 212,
              "end": 214
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 182,
            "end": 215
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 233
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 237,
                        "end": 244
                      },
                      "typeArguments": null,
                      "start": 237,
                      "end": 244
                    },
                    "start": 235,
                    "end": 244
                  },
                  "start": 234,
                  "end": 244
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 263
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "derivedProp",
                        "start": 264,
                        "end": 276
                      },
                      "optional": false,
                      "computed": false,
                      "start": 256,
                      "end": 276
                    },
                    "directive": null,
                    "start": 256,
                    "end": 276
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
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 285,
                          "end": 289
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "prop",
                          "start": 290,
                          "end": 295
                        },
                        "optional": false,
                        "computed": false,
                        "start": 285,
                        "end": 295
                      },
                      "right": {
                        "type": "Literal",
                        "value": 10,
                        "raw": "10",
                        "start": 299,
                        "end": 301
                      },
                      "start": 285,
                      "end": 301
                    },
                    "directive": null,
                    "start": 285,
                    "end": 302
                  }
                ],
                "start": 246,
                "end": 317
              },
              "expression": false,
              "start": 233,
              "end": 317
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 317
          }
        ],
        "start": 176,
        "end": 319
      },
      "abstract": false,
      "declare": false,
      "start": 149,
      "end": 319
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 320
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
    "type": "Keyword",
    "value": "static",
    "start": 17,
    "end": 23
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 40,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 49,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "Derived",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 85,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 92,
    "end": 93
  },
  {
    "type": "PrivateIdentifier",
    "value": "derivedProp",
    "start": 93,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 123,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 127,
    "end": 128
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 155,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 163,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 182,
    "end": 188
  },
  {
    "type": "PrivateIdentifier",
    "value": "derivedProp",
    "start": 189,
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
    "value": "number",
    "start": 203,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 210,
    "end": 211
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 212,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 220,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 227,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 256,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 263,
    "end": 264
  },
  {
    "type": "PrivateIdentifier",
    "value": "derivedProp",
    "start": 264,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 285,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 289,
    "end": 290
  },
  {
    "type": "PrivateIdentifier",
    "value": "prop",
    "start": 290,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 318,
    "end": 319
  }
]
```
