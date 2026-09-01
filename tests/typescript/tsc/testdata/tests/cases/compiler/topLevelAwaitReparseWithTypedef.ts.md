__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 69
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
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 74,
                  "end": 79
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 81,
                  "end": 83
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 74,
                "end": 83
              }
            ],
            "start": 72,
            "end": 85
          },
          "definite": false,
          "start": 66,
          "end": 85
        }
      ],
      "declare": false,
      "start": 60,
      "end": 85
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 103,
                "end": 106
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 112
              },
              "optional": false,
              "computed": false,
              "start": 103,
              "end": 112
            },
            "definite": false,
            "start": 99,
            "end": 112
          }
        ],
        "declare": false,
        "start": 93,
        "end": 113
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 86,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 206
        }
      ],
      "declare": false,
      "start": 199,
      "end": 207
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 60,
  "end": 207
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 74,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 81,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 86,
    "end": 92
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 93,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "foo",
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
