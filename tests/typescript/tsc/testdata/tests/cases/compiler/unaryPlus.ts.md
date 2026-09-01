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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 29,
              "end": 30
            },
            "prefix": true,
            "start": 28,
            "end": 30
          },
          "definite": false,
          "start": 24,
          "end": 30
        }
      ],
      "declare": false,
      "start": 20,
      "end": 31
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 37
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "expression": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 47,
                "end": 49
              },
              "start": 42,
              "end": 49
            },
            "prefix": true,
            "start": 40,
            "end": 50
          },
          "definite": false,
          "start": 36,
          "end": 50
        }
      ],
      "declare": false,
      "start": 32,
      "end": 51
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 58
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "some",
              "optional": false,
              "typeAnnotation": null,
              "start": 61,
              "end": 65
            },
            "initializer": null,
            "computed": false,
            "start": 61,
            "end": 65
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 72
            },
            "initializer": null,
            "computed": false,
            "start": 67,
            "end": 72
          }
        ],
        "start": 59,
        "end": 74
      },
      "const": false,
      "declare": false,
      "start": 52,
      "end": 74
    },
    {
      "type": "EmptyStatement",
      "start": 74,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 81
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 85,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 91
              },
              "optional": false,
              "computed": false,
              "start": 85,
              "end": 91
            },
            "prefix": true,
            "start": 84,
            "end": 91
          },
          "definite": false,
          "start": 80,
          "end": 91
        }
      ],
      "declare": false,
      "start": 76,
      "end": 92
    },
    {
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
            "start": 133,
            "end": 134
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "+",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 138,
              "end": 141
            },
            "prefix": true,
            "start": 137,
            "end": 141
          },
          "definite": false,
          "start": 133,
          "end": 141
        }
      ],
      "declare": false,
      "start": 129,
      "end": 142
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 165,
            "end": 166
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "-",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 170,
              "end": 173
            },
            "prefix": true,
            "start": 169,
            "end": 173
          },
          "definite": false,
          "start": 165,
          "end": 173
        }
      ],
      "declare": false,
      "start": 161,
      "end": 174
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 198,
            "end": 199
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "~",
            "argument": {
              "type": "Literal",
              "value": "3",
              "raw": "\"3\"",
              "start": 203,
              "end": 206
            },
            "prefix": true,
            "start": 202,
            "end": 206
          },
          "definite": false,
          "start": 198,
          "end": 206
        }
      ],
      "declare": false,
      "start": 194,
      "end": 207
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 20,
  "end": 226
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 20,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 28,
    "end": 29
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 32,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 47,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 52,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "E",
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
    "value": "some",
    "start": 61,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 67,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "some",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 129,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 138,
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
    "value": "var",
    "start": 161,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 170,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 194,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "~",
    "start": 202,
    "end": 203
  },
  {
    "type": "String",
    "value": "\"3\"",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  }
]
```
