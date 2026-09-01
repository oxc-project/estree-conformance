__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReadonlyData",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 22
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 45,
                "end": 51
              },
              "start": 43,
              "end": 51
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 52
          }
        ],
        "start": 23,
        "end": 54
      },
      "declare": false,
      "start": 0,
      "end": 54
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
            "name": "data",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReadonlyData",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 80
                },
                "typeArguments": null,
                "start": 68,
                "end": 80
              },
              "start": 66,
              "end": 80
            },
            "start": 62,
            "end": 80
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 90
                },
                "value": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "'foo'",
                  "start": 92,
                  "end": 97
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 85,
                "end": 97
              }
            ],
            "start": 83,
            "end": 99
          },
          "definite": false,
          "start": 62,
          "end": 99
        }
      ],
      "declare": false,
      "start": 56,
      "end": 100
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
            "name": "clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 112
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 124
                },
                "start": 117,
                "end": 124
              }
            ],
            "start": 115,
            "end": 126
          },
          "definite": false,
          "start": 107,
          "end": 126
        }
      ],
      "declare": false,
      "start": 101,
      "end": 127
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
            "name": "clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 128,
            "end": 133
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 139
          },
          "optional": false,
          "computed": false,
          "start": 128,
          "end": 139
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "'bar'",
          "start": 142,
          "end": 147
        },
        "start": 128,
        "end": 147
      },
      "directive": null,
      "start": 128,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ReadonlyData",
    "start": 10,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 29,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "ReadonlyData",
    "start": 68,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "value",
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
    "value": "'foo'",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 101,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 107,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 120,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "clone",
    "start": 128,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 142,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
