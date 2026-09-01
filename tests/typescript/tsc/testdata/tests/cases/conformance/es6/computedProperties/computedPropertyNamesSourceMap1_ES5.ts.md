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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 15,
              "end": 22
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
                "body": [
                  {
                    "type": "DebuggerStatement",
                    "start": 36,
                    "end": 45
                  }
                ],
                "start": 26,
                "end": 51
              },
              "expression": false,
              "start": 23,
              "end": 51
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 51
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "goodbye",
              "raw": "\"goodbye\"",
              "start": 61,
              "end": 70
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
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 85,
                      "end": 86
                    },
                    "start": 78,
                    "end": 87
                  }
                ],
                "start": 74,
                "end": 93
              },
              "expression": false,
              "start": 71,
              "end": 93
            },
            "kind": "get",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 56,
            "end": 93
          }
        ],
        "start": 8,
        "end": 95
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 95
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
    "value": "C",
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
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "debugger",
    "start": 36,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 56,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "\"goodbye\"",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 78,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95
  }
]
```
