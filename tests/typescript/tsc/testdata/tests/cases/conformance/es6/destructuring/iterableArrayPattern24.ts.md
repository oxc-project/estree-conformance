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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              },
              "start": 5,
              "end": 13
            },
            "start": 4,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 18,
                  "end": 25
                },
                "start": 18,
                "end": 27
              },
              "start": 16,
              "end": 27
            },
            "start": 15,
            "end": 27
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 27
        }
      ],
      "declare": false,
      "start": 0,
      "end": 28
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 37
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 33,
              "end": 37
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 29,
          "end": 38
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 43,
                "end": 44
              },
              "value": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 46,
                "end": 48
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 43,
              "end": 48
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 50,
                "end": 51
              },
              "value": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 53,
                "end": 57
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 50,
              "end": 57
            }
          ],
          "start": 41,
          "end": 59
        },
        "start": 29,
        "end": 59
      },
      "directive": null,
      "start": 29,
      "end": 60
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "value": "a",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 36,
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
    "value": "=",
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
    "type": "Numeric",
    "value": "0",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 53,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  }
]
```
