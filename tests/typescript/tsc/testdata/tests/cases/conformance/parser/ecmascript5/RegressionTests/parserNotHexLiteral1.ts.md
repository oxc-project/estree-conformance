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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
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
                  "name": "e0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 11
                },
                "value": {
                  "type": "Literal",
                  "value": "cat",
                  "raw": "'cat'",
                  "start": 13,
                  "end": 18
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 9,
                "end": 18
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 20,
                  "end": 22
                },
                "value": {
                  "type": "Literal",
                  "value": "dog",
                  "raw": "'dog'",
                  "start": 24,
                  "end": 29
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 20,
                "end": 29
              }
            ],
            "start": 8,
            "end": 30
          },
          "definite": false,
          "start": 4,
          "end": 30
        }
      ],
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 39
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "info",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 44
          },
          "optional": false,
          "computed": false,
          "start": 32,
          "end": 44
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x0",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 50
            },
            "optional": false,
            "computed": false,
            "start": 46,
            "end": 50
          }
        ],
        "optional": false,
        "start": 32,
        "end": 51
      },
      "directive": null,
      "start": 32,
      "end": 52
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 173,
            "end": 180
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "info",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 185
          },
          "optional": false,
          "computed": false,
          "start": 173,
          "end": 185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 188
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "e0",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 191
            },
            "optional": false,
            "computed": false,
            "start": 187,
            "end": 191
          }
        ],
        "optional": false,
        "start": 173,
        "end": 192
      },
      "directive": null,
      "start": 173,
      "end": 193
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 193
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "value": "e0",
    "start": 9,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "String",
    "value": "'cat'",
    "start": 13,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x0",
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
    "type": "String",
    "value": "'dog'",
    "start": 24,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "console",
    "start": 32,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "info",
    "start": 40,
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
    "value": "x",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x0",
    "start": 48,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 173,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "info",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "e0",
    "start": 189,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 192,
    "end": 193
  }
]
```
