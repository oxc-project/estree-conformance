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
        "name": "Recursive1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 45
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
                  "type": "TSParameterProperty",
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parent",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recursive1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 82
                        },
                        "typeArguments": null,
                        "start": 72,
                        "end": 82
                      },
                      "start": 70,
                      "end": 82
                    },
                    "start": 63,
                    "end": 82
                  },
                  "readonly": true,
                  "static": false,
                  "start": 46,
                  "end": 82
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 84,
                "end": 86
              },
              "expression": false,
              "start": 45,
              "end": 86
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 34,
            "end": 86
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "value": {
              "type": "ConditionalExpression",
              "test": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 115,
                  "end": 119
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 126
                },
                "optional": false,
                "computed": false,
                "start": 115,
                "end": 126
              },
              "consequent": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 129,
                      "end": 133
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "parent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 140
                    },
                    "optional": false,
                    "computed": false,
                    "start": 129,
                    "end": 140
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "depth",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 141,
                    "end": 146
                  },
                  "optional": false,
                  "computed": false,
                  "start": 129,
                  "end": 146
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 149,
                  "end": 150
                },
                "start": 129,
                "end": 150
              },
              "alternate": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 153,
                "end": 154
              },
              "start": 115,
              "end": 154
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 91,
            "end": 155
          }
        ],
        "start": 28,
        "end": 157
      },
      "abstract": false,
      "declare": false,
      "start": 11,
      "end": 157
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive2",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 175
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
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "typeArguments": null,
                "start": 191,
                "end": 201
              },
              "start": 189,
              "end": 201
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 182,
            "end": 202
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 212
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 214,
                "end": 220
              },
              "start": 212,
              "end": 220
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 223,
                  "end": 227
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 234
                },
                "optional": false,
                "computed": false,
                "start": 223,
                "end": 234
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "depth",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 240
              },
              "optional": false,
              "computed": false,
              "start": 223,
              "end": 240
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 207,
            "end": 241
          }
        ],
        "start": 176,
        "end": 243
      },
      "abstract": false,
      "declare": false,
      "start": 159,
      "end": 243
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Recursive3",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 261
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
              "name": "parent",
              "optional": false,
              "typeAnnotation": null,
              "start": 268,
              "end": 274
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Recursive3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 287
                },
                "typeArguments": null,
                "start": 277,
                "end": 287
              },
              "start": 275,
              "end": 287
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 268,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "depth",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 300,
                "end": 306
              },
              "start": 298,
              "end": 306
            },
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 309,
                  "end": 313
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 320
                },
                "optional": false,
                "computed": false,
                "start": 309,
                "end": 320
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "alpha",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 326
              },
              "optional": false,
              "computed": false,
              "start": 309,
              "end": 326
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 293,
            "end": 327
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alpha",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 337
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 340,
              "end": 341
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 332,
            "end": 342
          }
        ],
        "start": 262,
        "end": 344
      },
      "abstract": false,
      "declare": false,
      "start": 245,
      "end": 344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 344
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 11,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Recursive1",
    "start": 17,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 34,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 46,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 54,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Recursive1",
    "start": 72,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 91,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "depth",
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
    "type": "Identifier",
    "value": "number",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 115,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 120,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 127,
    "end": 128
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 141,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 147,
    "end": 148
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 151,
    "end": 152
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 156,
    "end": 157
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 159,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "Recursive2",
    "start": 165,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 182,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "!",
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
    "value": "Recursive2",
    "start": 191,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 228,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 235,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 245,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "Recursive3",
    "start": 251,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Recursive3",
    "start": 277,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "depth",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 307,
    "end": 308
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 309,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "parent",
    "start": 314,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 321,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "alpha",
    "start": 332,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 338,
    "end": 339
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  }
]
```
