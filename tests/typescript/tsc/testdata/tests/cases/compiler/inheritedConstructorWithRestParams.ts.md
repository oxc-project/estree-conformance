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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 28
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 35,
                        "end": 41
                      },
                      "start": 35,
                      "end": 43
                    },
                    "start": 33,
                    "end": 43
                  },
                  "value": null,
                  "start": 29,
                  "end": 43
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 45,
                "end": 48
              },
              "expression": false,
              "start": 28,
              "end": 48
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 17,
            "end": 48
          }
        ],
        "start": 11,
        "end": 50
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 50
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
        "start": 58,
        "end": 65
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 78
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 79,
        "end": 82
      },
      "abstract": false,
      "declare": false,
      "start": 52,
      "end": 82
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 101
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 102,
            "end": 104
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 106,
            "end": 108
          }
        ],
        "start": 90,
        "end": 109
      },
      "directive": null,
      "start": 90,
      "end": 110
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 122
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 123,
            "end": 125
          }
        ],
        "start": 111,
        "end": 126
      },
      "directive": null,
      "start": 111,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 139
        },
        "typeArguments": null,
        "arguments": [],
        "start": 128,
        "end": 141
      },
      "directive": null,
      "start": 128,
      "end": 142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 165
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 166,
            "end": 168
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 170,
            "end": 171
          }
        ],
        "start": 154,
        "end": 172
      },
      "directive": null,
      "start": 154,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 178,
          "end": 185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 186,
            "end": 187
          }
        ],
        "start": 174,
        "end": 188
      },
      "directive": null,
      "start": 174,
      "end": 189
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 189
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
    "value": "constructor",
    "start": 17,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 29,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 52,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 58,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 66,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 74,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 90,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 94,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 106,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 111,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 115,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 122,
    "end": 123
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 126,
    "end": 127
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 128,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 132,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 154,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 166,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 168,
    "end": 169
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 174,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 178,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 185,
    "end": 186
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  }
]
```
