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
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 22,
          "end": 26
        },
        "expression": false,
        "start": 7,
        "end": 26
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 26
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "prop.inner",
                    "raw": "\"prop.inner\"",
                    "start": 45,
                    "end": 57
                  },
                  "value": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 60,
                    "end": 63
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 44,
                  "end": 63
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 73
                  },
                  "value": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 85,
                          "end": 90
                        },
                        "value": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 92,
                          "end": 95
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 85,
                        "end": 95
                      }
                    ],
                    "start": 75,
                    "end": 102
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 69,
                  "end": 102
                }
              ],
              "start": 38,
              "end": 104
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 113
              },
              "typeArguments": null,
              "start": 108,
              "end": 113
            },
            "start": 38,
            "end": 113
          },
          "definite": false,
          "start": 34,
          "end": 113
        }
      ],
      "declare": false,
      "start": 28,
      "end": 113
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 118
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "property": {
              "type": "Literal",
              "value": "prop.inner",
              "raw": "\"prop.inner\"",
              "start": 121,
              "end": 133
            },
            "optional": false,
            "computed": true,
            "start": 119,
            "end": 134
          },
          "optional": false,
          "computed": true,
          "start": 115,
          "end": 135
        },
        "right": {
          "type": "Literal",
          "value": "A",
          "raw": "\"A\"",
          "start": 137,
          "end": 140
        },
        "start": 115,
        "end": 140
      },
      "directive": null,
      "start": 115,
      "end": 141
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 145
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 147
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prop",
                "optional": false,
                "typeAnnotation": null,
                "start": 148,
                "end": 152
              },
              "optional": false,
              "computed": false,
              "start": 146,
              "end": 152
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 158
            },
            "optional": false,
            "computed": false,
            "start": 146,
            "end": 158
          },
          "optional": false,
          "computed": true,
          "start": 142,
          "end": 159
        },
        "right": {
          "type": "Literal",
          "value": "B",
          "raw": "\"B\"",
          "start": 162,
          "end": 165
        },
        "start": 142,
        "end": 165
      },
      "directive": null,
      "start": 142,
      "end": 166
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 181,
          "end": 184
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 193
                },
                "property": {
                  "type": "Literal",
                  "value": "prop.inner",
                  "raw": "\"prop.inner\"",
                  "start": 194,
                  "end": 206
                },
                "optional": false,
                "computed": true,
                "start": 192,
                "end": 207
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 210,
                    "end": 213
                  },
                  "property": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 225
                      },
                      "optional": false,
                      "computed": false,
                      "start": 219,
                      "end": 225
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 231
                    },
                    "optional": false,
                    "computed": false,
                    "start": 219,
                    "end": 231
                  },
                  "optional": false,
                  "computed": true,
                  "start": 210,
                  "end": 232
                },
                "right": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 235,
                  "end": 238
                },
                "start": 210,
                "end": 238
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 191,
              "end": 238
            }
          ],
          "start": 185,
          "end": 240
        },
        "abstract": false,
        "declare": false,
        "start": 175,
        "end": 240
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 168,
      "end": 240
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oo",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 255
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 265,
                      "end": 266
                    },
                    "property": {
                      "type": "Literal",
                      "value": "prop.inner",
                      "raw": "'prop.inner'",
                      "start": 267,
                      "end": 279
                    },
                    "optional": false,
                    "computed": true,
                    "start": 265,
                    "end": 280
                  },
                  "value": {
                    "type": "Literal",
                    "value": "A",
                    "raw": "\"A\"",
                    "start": 282,
                    "end": 285
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 264,
                  "end": 285
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 298
                      },
                      "optional": false,
                      "computed": false,
                      "start": 292,
                      "end": 298
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "inner",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 304
                    },
                    "optional": false,
                    "computed": false,
                    "start": 292,
                    "end": 304
                  },
                  "value": {
                    "type": "Literal",
                    "value": "B",
                    "raw": "\"B\"",
                    "start": 307,
                    "end": 310
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 291,
                  "end": 310
                }
              ],
              "start": 258,
              "end": 313
            },
            "definite": false,
            "start": 253,
            "end": 313
          }
        ],
        "declare": false,
        "start": 249,
        "end": 313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 242,
      "end": 313
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 313
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
    "value": "foo",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Punctuator",
    "value": "[",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"prop.inner\"",
    "start": 45,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 69,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "value": "inner",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 92,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 105,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 108,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 120,
    "end": 121
  },
  {
    "type": "String",
    "value": "\"prop.inner\"",
    "start": 121,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 136,
    "end": 137
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 137,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 148,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 168,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 175,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 181,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194
  },
  {
    "type": "String",
    "value": "\"prop.inner\"",
    "start": 194,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 209,
    "end": 210
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 221,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 235,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 242,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 249,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "oo",
    "start": 253,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 266,
    "end": 267
  },
  {
    "type": "String",
    "value": "'prop.inner'",
    "start": 267,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 280,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 294,
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
    "value": "inner",
    "start": 299,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 305,
    "end": 306
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  }
]
```
