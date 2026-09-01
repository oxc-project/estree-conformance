__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TShirtSize",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 15
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Small",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 26
            },
            "initializer": null,
            "computed": false,
            "start": 21,
            "end": 26
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Medium",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "initializer": null,
            "computed": false,
            "start": 31,
            "end": 37
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Large",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 42,
            "end": 47
          }
        ],
        "start": 16,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 49
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
            "name": "mySize",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 60
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 73
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Large",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 79
            },
            "optional": false,
            "computed": false,
            "start": 63,
            "end": 79
          },
          "definite": false,
          "start": 54,
          "end": 79
        }
      ],
      "declare": false,
      "start": 50,
      "end": 80
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
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 85,
            "end": 89
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "TShirtSize",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 102
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "mySize",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 109
            },
            "optional": false,
            "computed": true,
            "start": 92,
            "end": 110
          },
          "definite": false,
          "start": 85,
          "end": 110
        }
      ],
      "declare": false,
      "start": 81,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 200,
          "end": 204
        },
        "operator": "+",
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 207,
          "end": 209
        },
        "start": 200,
        "end": 209
      },
      "directive": null,
      "start": 200,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "TShirtSize",
    "start": 5,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "Small",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "Medium",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Large",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "mySize",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "TShirtSize",
    "start": 63,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Large",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 81,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 85,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "TShirtSize",
    "start": 92,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "mySize",
    "start": 103,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 200,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 205,
    "end": 206
  },
  {
    "type": "String",
    "value": "''",
    "start": 207,
    "end": 209
  }
]
```
