__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 33,
        "end": 35
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 36,
        "end": 39
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 23,
      "end": 39
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 48
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 49,
        "end": 52
      },
      "abstract": false,
      "declare": false,
      "start": 40,
      "end": 52
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "init": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 121,
                  "end": 122
                },
                "definite": false,
                "start": 117,
                "end": 122
              }
            ],
            "declare": false,
            "start": 113,
            "end": 123
          }
        ],
        "start": 111,
        "end": 125
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 97,
      "end": 125
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3a",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 135
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 141
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
                "body": [],
                "start": 144,
                "end": 147
              },
              "expression": false,
              "start": 141,
              "end": 147
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 138,
            "end": 147
          }
        ],
        "start": 136,
        "end": 149
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 149
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 209
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 23,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 40,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 46,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 97,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "m3a",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 124,
    "end": 125
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 126,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "m3a",
    "start": 132,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 138,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 148,
    "end": 149
  }
]
```
