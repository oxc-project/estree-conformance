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
            "name": "_super",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 13,
            "end": 15
          },
          "definite": false,
          "start": 4,
          "end": 15
        }
      ],
      "declare": false,
      "start": 0,
      "end": 16
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
        "start": 35,
        "end": 38
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 76
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
                                "name": "_super",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 108
                              },
                              "init": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 111,
                                "end": 113
                              },
                              "definite": false,
                              "start": 102,
                              "end": 113
                            }
                          ],
                          "declare": false,
                          "start": 98,
                          "end": 114
                        }
                      ],
                      "start": 84,
                      "end": 136
                    },
                    "id": null,
                    "generator": false,
                    "start": 78,
                    "end": 136
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 69,
                  "end": 136
                }
              ],
              "start": 59,
              "end": 142
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 44,
            "end": 142
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 160
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 163,
              "end": 165
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 147,
            "end": 166
          }
        ],
        "start": 39,
        "end": 180
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 180
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 187,
        "end": 188
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 200
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
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 219
            },
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "doStuff",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 239
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
                                "name": "_super",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 265,
                                "end": 271
                              },
                              "init": {
                                "type": "Literal",
                                "value": 10,
                                "raw": "10",
                                "start": 274,
                                "end": 276
                              },
                              "definite": false,
                              "start": 265,
                              "end": 276
                            }
                          ],
                          "declare": false,
                          "start": 261,
                          "end": 277
                        }
                      ],
                      "start": 247,
                      "end": 307
                    },
                    "id": null,
                    "generator": false,
                    "start": 241,
                    "end": 307
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 232,
                  "end": 307
                }
              ],
              "start": 222,
              "end": 313
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 207,
            "end": 313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_super",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 331
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 334,
              "end": 336
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 318,
            "end": 337
          }
        ],
        "start": 201,
        "end": 351
      },
      "abstract": false,
      "declare": false,
      "start": 181,
      "end": 351
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 351
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
    "value": "_super",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 15,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 44,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "prop1",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 98,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 102,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 109,
    "end": 110
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 111,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 189,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 197,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 207,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "prop2",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "doStuff",
    "start": 232,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 261,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 272,
    "end": 273
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 274,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 318,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "_super",
    "start": 325,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 332,
    "end": 333
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 334,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  }
]
```
