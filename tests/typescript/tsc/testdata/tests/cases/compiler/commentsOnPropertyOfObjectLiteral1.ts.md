__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "resolve",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
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
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 22
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 51,
                          "end": 54
                        },
                        "start": 49,
                        "end": 54
                      },
                      "start": 42,
                      "end": 54
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 66
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 69
                    },
                    "optional": false,
                    "computed": false,
                    "start": 59,
                    "end": 69
                  },
                  "id": null,
                  "generator": false,
                  "start": 41,
                  "end": 69
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 20,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 78
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 89,
                  "end": 96
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 75,
                "end": 96
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 105
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 142,
                          "end": 145
                        },
                        "start": 140,
                        "end": 145
                      },
                      "start": 133,
                      "end": 145
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 157
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 150,
                    "end": 160
                  },
                  "id": null,
                  "generator": false,
                  "start": 132,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 102,
                "end": 160
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 166,
                  "end": 169
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 206,
                          "end": 209
                        },
                        "start": 204,
                        "end": 209
                      },
                      "start": 197,
                      "end": 209
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 221
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 224
                    },
                    "optional": false,
                    "computed": false,
                    "start": 214,
                    "end": 224
                  },
                  "id": null,
                  "generator": false,
                  "start": 196,
                  "end": 224
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 166,
                "end": 224
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 233
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 283,
                          "end": 286
                        },
                        "start": 281,
                        "end": 286
                      },
                      "start": 274,
                      "end": 286
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "details",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 301
                    },
                    "optional": false,
                    "computed": false,
                    "start": 291,
                    "end": 301
                  },
                  "id": null,
                  "generator": false,
                  "start": 273,
                  "end": 301
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 230,
                "end": 301
              }
            ],
            "start": 14,
            "end": 304
          },
          "definite": false,
          "start": 4,
          "end": 304
        }
      ],
      "declare": false,
      "start": 0,
      "end": 305
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 305
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "resolve",
    "start": 4,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
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
    "value": "id",
    "start": 20,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 56,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 59,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 67,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "id1",
    "start": 75,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "id2",
    "start": 102,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 133,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 147,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 150,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 158,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "id3",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 211,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 214,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "id4",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 288,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "details",
    "start": 291,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  }
]
```
