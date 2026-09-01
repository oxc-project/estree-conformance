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
            "name": "strSet",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 14,
                  "end": 17
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 18,
                      "end": 24
                    }
                  ],
                  "start": 17,
                  "end": 25
                },
                "start": 14,
                "end": 25
              },
              "start": 12,
              "end": 25
            },
            "start": 6,
            "end": 25
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "typeArguments": null,
            "arguments": [],
            "start": 28,
            "end": 37
          },
          "definite": false,
          "start": 6,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 37
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
            "name": "strSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 44
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 45,
            "end": 48
          },
          "optional": false,
          "computed": false,
          "start": 38,
          "end": 48
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Hello",
            "raw": "'Hello'",
            "start": 49,
            "end": 56
          }
        ],
        "optional": false,
        "start": 38,
        "end": 57
      },
      "directive": null,
      "start": 38,
      "end": 57
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
            "name": "strSet",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 64
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 68
          },
          "optional": false,
          "computed": false,
          "start": 58,
          "end": 68
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "World",
            "raw": "'World'",
            "start": 69,
            "end": 76
          }
        ],
        "optional": false,
        "start": 58,
        "end": 77
      },
      "directive": null,
      "start": 58,
      "end": 77
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "str",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 92
            },
            "init": null,
            "definite": false,
            "start": 89,
            "end": 92
          }
        ],
        "declare": false,
        "start": 83,
        "end": 92
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "strSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 102
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 104,
        "end": 107
      },
      "start": 78,
      "end": 107
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "strSet",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Keyword",
    "value": "new",
    "start": 28,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "strSet",
    "start": 38,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 45,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "'Hello'",
    "start": 49,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "strSet",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "add",
    "start": 65,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "String",
    "value": "'World'",
    "start": 69,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 83,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 93,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "strSet",
    "start": 96,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  }
]
```
