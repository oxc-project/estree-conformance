__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [],
        "start": 35,
        "end": 38
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "error",
          "optional": false,
          "typeAnnotation": null,
          "start": 46,
          "end": 51
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 68
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "number",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 75
                  },
                  "optional": false,
                  "computed": false,
                  "start": 63,
                  "end": 75
                },
                "operator": "===",
                "right": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Literal",
                    "value": 2147024809,
                    "raw": "2147024809",
                    "start": 81,
                    "end": 91
                  },
                  "prefix": true,
                  "start": 80,
                  "end": 91
                },
                "start": 63,
                "end": 91
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [],
                "start": 93,
                "end": 96
              },
              "alternate": null,
              "start": 59,
              "end": 96
            }
          ],
          "start": 53,
          "end": 98
        },
        "start": 39,
        "end": 98
      },
      "finalizer": null,
      "start": 31,
      "end": 98
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 111
            },
            "init": null,
            "definite": false,
            "start": 108,
            "end": 111
          }
        ],
        "declare": false,
        "start": 104,
        "end": 111
      },
      "right": {
        "type": "ThisExpression",
        "start": 115,
        "end": 119
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 121,
        "end": 124
      },
      "start": 99,
      "end": 124
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
        "start": 132,
        "end": 133
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
              "name": "temp",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 151
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
                    "type": "ForInStatement",
                    "left": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 173,
                            "end": 174
                          },
                          "init": null,
                          "definite": false,
                          "start": 173,
                          "end": 174
                        }
                      ],
                      "declare": false,
                      "start": 169,
                      "end": 174
                    },
                    "right": {
                      "type": "ThisExpression",
                      "start": 178,
                      "end": 182
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 184,
                      "end": 195
                    },
                    "start": 164,
                    "end": 195
                  }
                ],
                "start": 154,
                "end": 201
              },
              "expression": false,
              "start": 151,
              "end": 201
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 140,
            "end": 201
          }
        ],
        "start": 134,
        "end": 203
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 203
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 31,
  "end": 204
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "try",
    "start": 31,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 37,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 46,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "if",
    "start": 59,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 76,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 80,
    "end": 81
  },
  {
    "type": "Numeric",
    "value": "2147024809",
    "start": 81,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 104,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 108,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 112,
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
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 140,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "temp",
    "start": 147,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 175,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 178,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 202,
    "end": 203
  }
]
```
