__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "global",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 32,
                  "end": 33
                },
                "definite": false,
                "start": 23,
                "end": 33
              }
            ],
            "declare": false,
            "start": 19,
            "end": 34
          }
        ],
        "start": 13,
        "end": 36
      },
      "expression": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 47
      },
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
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 68
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 69,
              "end": 71
            },
            "abstract": false,
            "declare": false,
            "start": 56,
            "end": 71
          }
        ],
        "start": 50,
        "end": 73
      },
      "expression": false,
      "start": 37,
      "end": 73
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 91
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 92,
        "end": 95
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 75,
      "end": 95
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 109
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "global",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 118,
              "end": 124
            },
            "start": 116,
            "end": 124
          },
          "start": 110,
          "end": 124
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 126,
        "end": 129
      },
      "expression": false,
      "start": 97,
      "end": 129
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 138
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
                  "name": "global",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 153
                },
                "value": {
                  "type": "Literal",
                  "value": "123",
                  "raw": "\"123\"",
                  "start": 155,
                  "end": 160
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 147,
                "end": 160
              }
            ],
            "start": 141,
            "end": 162
          },
          "definite": false,
          "start": 135,
          "end": 162
        }
      ],
      "declare": false,
      "start": 131,
      "end": 162
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 162
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 19,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 62,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 75,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 85,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 97,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 135,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "global",
    "start": 147,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "\"123\"",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  }
]
```
