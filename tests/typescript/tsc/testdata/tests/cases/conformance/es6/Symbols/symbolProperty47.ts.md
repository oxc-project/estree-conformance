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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 25
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 37
              },
              "optional": false,
              "computed": false,
              "start": 19,
              "end": 37
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 58,
                      "end": 60
                    },
                    "start": 51,
                    "end": 61
                  }
                ],
                "start": 41,
                "end": 67
              },
              "expression": false,
              "start": 38,
              "end": 67
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 67
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 111
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "hasInstance",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 123
              },
              "optional": false,
              "computed": false,
              "start": 105,
              "end": 123
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
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 126,
                    "end": 134
                  },
                  "start": 125,
                  "end": 134
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 136,
                "end": 143
              },
              "expression": false,
              "start": 124,
              "end": 143
            },
            "kind": "set",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 100,
            "end": 143
          }
        ],
        "start": 8,
        "end": 145
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 145
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "typeArguments": null,
            "arguments": [],
            "start": 148,
            "end": 153
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 173
            },
            "optional": false,
            "computed": false,
            "start": 155,
            "end": 173
          },
          "optional": false,
          "computed": true,
          "start": 147,
          "end": 174
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 177,
          "end": 178
        },
        "start": 147,
        "end": 178
      },
      "directive": null,
      "start": 147,
      "end": 179
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeArguments": null,
            "arguments": [],
            "start": 181,
            "end": 186
          },
          "property": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 194
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 206
            },
            "optional": false,
            "computed": false,
            "start": 188,
            "end": 206
          },
          "optional": false,
          "computed": true,
          "start": 180,
          "end": 207
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 210,
          "end": 212
        },
        "start": 180,
        "end": 212
      },
      "directive": null,
      "start": 180,
      "end": 213
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 213
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 26,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 51,
    "end": 57
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 58,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 105,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 112,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 128,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 155,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 162,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 175,
    "end": 176
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 181,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 188,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "hasInstance",
    "start": 195,
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
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  }
]
```
